
import React, { PropsWithChildren } from "react";
import { WagmiProvider } from 'wagmi';
import { initConfig } from '@lib/web3';

export interface MBProviderProps extends PropsWithChildren {
  apiKey: string
}
export const MBProvider = ({ children, apiKey }: MBProviderProps) => <WagmiProvider reconnectOnMount={true} config={initConfig({ key: apiKey })}>{children}</WagmiProvider>
