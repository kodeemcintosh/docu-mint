
import { createPublicClient, createWalletClient, http, toHex, type Hex } from "viem";
import { sepolia, mainnet, bsc, opBNB, polygon, base, optimism, polygonZkEvm, arbitrum, zkSync } from "viem/chains";
import { createConfig } from "wagmi";

export const NETWORKS = [
  sepolia,
  mainnet,
  polygon,
  // polygonZkEvm,
  // bsc,
  // opBNB,
  // base,
  // optimism,
  // zkSync,
  // arbitrum
];

export const getNetwork = (chainId: Hex) => NETWORKS.find(({ id }) => toHex(id) === chainId);

export const getPublicClient = (chainId: Hex) => createPublicClient({
  chain: NETWORKS.find(({ id }) => toHex(id) === chainId),
  transport: http(),
});

export const getWalletClient = (chainId: Hex) => createWalletClient({
  chain: NETWORKS.find(({ id }) => toHex(id) === chainId),
  transport: http(),
});


export interface Config {
  key: string
}
export function initConfig({ key }: Config) {
  return createConfig({
    chains: [
      sepolia, mainnet, polygon
    ],
    // connectors: [injected(), walletConnect({ projectId: "0" }), coinbaseWallet({ appName: "Snupr" })],
    ssr: true,
    syncConnectedChain: true,
    transports: {
      [sepolia.id]: http(`https://sepolia.infura.io/v3/${key}`),
      [mainnet.id]: http(`https://mainnet.infura.io/v3/${key}`),
      [polygon.id]: http(`https://polygon.infura.io/v3/${key}`),
    }
  });
}