'use client';

import { useState, useEffect, PropsWithChildren } from "react";
import { useAccount, useConnect, useDisconnect, type Connector } from 'wagmi'
// import { SiweButton } from "./SiweButton";
import { useSiwe } from "@hooks/useSiwe";
import { Modal } from "@components/Modal";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import { Card } from "@components/Card";
import { Profile } from "./Profile";
import { useSidebar } from "@hooks/useSidebar";

// export interface TransformChildrenProps extends ConnectResult<PublicClient> {}
export interface MagicButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onConnectedClick?: () => void;
}

export const MagicButton = ({ children: childrenAfterConnect, className, disabled, onConnectedClick }: MagicButtonProps) => {
  const [state, setState] = useState<{
    connector?: Connector
    isModalOpen?: boolean
    address?: string
    error?: Error
    loading?: boolean
  } | null>(null)
  const { connectAsync, connect, connectors, data, variables, status } = useConnect();
  const { isConnected, address } = useAccount();
  const { signIn, loading: siweLoading, nonce: siweNonce } = useSiwe({
    onError: ({ error }) => setState((x) => ({ ...x, error })),
    onSuccess: ({ address }) => setState((x) => ({ ...x, address }))
  });
  const { toggle } = useSidebar();

  // Fetch user when:
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await fetch('/api/v1/session/me');
        const json = await res.json();
        setState((x) => ({ ...x, address: json.address }))
      } catch (_error) {
        console.error(_error);
      }
    }

    // 1. page loads
    getMe();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener('focus', getMe);
    return () => window.removeEventListener('focus', getMe);
  }, []);

  useEffect(() => {
    if(isConnected && !state?.address && !!address && !['success', 'idle'].includes(status)) {
      signIn();
    }
  }, [isConnected, state?.connector])

  const handleSignIn = async () => {
    setState((x) => ({ ...x, loading: true }));
    const connector = state?.connector ?? variables?.connector;

    try {
      // Open connector modal if none selected
      if(!connector) {
        setState((x) => ({ ...x, isModalOpen: true }));
        return;
      }

      try {
        const { accounts: [account] } = await connectAsync({
          connector: state?.connector as Connector
        });
        if(!account) {
          console.log("No account selected");
          return;
        };
      } catch (error) {
        console.error({ error });
      }
    } catch (error) {
      console.error(error);
      setState((x) => ({ ...x, error: error as Error }));
    } finally {
      setState((x) => ({ ...x, loading: false }));
    }
  }

  const handleSelectConnector = async (connector: Connector) => {
    setState((x) => ({ ...x, connector, isModalOpen: false }));

    try {
      const { accounts: [account] } = await connectAsync({
        connector: connector
      });
      if(!account) {
        console.log("No account selected");
        return;
      };
    } catch (error) {
      console.log({ error })
    } finally {}
  }

  if (isConnected) {
    return (
      <>
        {/* Account content goes here */}

        {!!state?.address ? (
          <>
             {/* {childrenAfterConnect}
             <span className="flex flex-row w-full bg-white h-[1px]" /> */}
          <Profile>
            <button
              className="flex w-full justify-center cursor-pointer hover:underline underline-offset-[6px]"
              onClick={async () => {
                await fetch('/api/v1/session/logout')
                setState({});
                toggle();
              }}
            >
              sign out
            </button>
          </Profile>
          </>
        ) : (
          // <SiweButton
          //   className={className}
          //   onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
          //   onError={({ error }) => setState((x) => ({ ...x, error }))}
          //   />

          <button
            className="border-white border-[2px] px-2 py-1"
            onClick={() => signIn()}
            disabled={!siweNonce || siweLoading || disabled}
            >
            extension still connected
          </button>
        )}
      </>
    )
  }

  return (
    <>
      <button
        className="border-white border-[2px] px-2 py-1"
        onClick={handleSignIn}
        disabled={!siweNonce || siweLoading || disabled}
        >
        connect wallet
      </button>

      <Modal
        className="flex w-full"
        isOpen={!!state?.isModalOpen}
        close={() => setState((x) => ({ ...x, isModalOpen: false }))}
        >
        <section className="flex flex-col h-fit justify-between content-center overflow-y-scroll">
          <Card title="Available Connectors">
            {connectors.map((connector: Connector) => (
              <button
                key={connector.id}
                className="flex flex-row h-fit w-full cursor-pointer border-[1px] px-2 py-1"
                onClick={() => handleSelectConnector(connector)}
                >{connector.name}</button>
            ))}
          </Card>
        </section>
      </Modal>
    </>
  );
}

export const MagicModal = () => <div id="portal-modal" />;
