
import { useState, useEffect } from "react";
import { useAccount, useSignMessage } from 'wagmi';
import type { Address } from 'viem';
import { SiweMessage } from 'siwe';

interface SiweHookProps {
  onSuccess?: (args: { address: string }) => void;
  onError?: (args: { error: Error }) => void;
}
// Sign-in with Ethereum == SIWE
export const useSiwe = (props?: SiweHookProps) => {
  const [state, setState] = useState<{
    loading?: boolean
    nonce?: string
  }>({})

  const fetchNonce = async () => {
    try {
      const nonceRes = await fetch('/api/v1/session/nonce');
      const { nonce } = await nonceRes.json();
      setState((x) => ({ ...x, nonce }));
    } catch (error) {
      setState((x) => ({ ...x, error: error as Error }));
    }
  }

  // Pre-fetch random nonce when button is rendered
  // to ensure deep linking works for WalletConnect
  // users on iOS when signing the SIWE message
  useEffect(() => {
    fetchNonce();
  }, []);

  const { address, chain } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const signIn = async () => {
    try {
      const chainId = chain?.id;
      if (!address || !chainId) return { ok: false };

      setState((x) => ({ ...x, loading: true }));
      // Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce: state.nonce
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // Verify signature
      const verifyRes = await fetch('/api/v1/session/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) throw new Error('Error verifying message');

      setState((x) => ({ ...x, loading: false }));
      props?.onSuccess?.({ address });
      return { ok: verifyRes.ok };
    } catch (error) {
      console.log({ error })
      setState((x) => ({ ...x, loading: false, nonce: undefined }));
      fetchNonce();
      props?.onError?.({ error: error as Error });
      return { ok: false };
    }
  }

  return { signIn, loading: state.loading, nonce: state.nonce };
}
