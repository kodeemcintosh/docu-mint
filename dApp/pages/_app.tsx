
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-ignore
import { MBProvider, Provider } from "@providers/wagmi";
import { SidebarProvider } from "@providers/sidebar";
import { Layout } from '@components/Layout';

import '../src/styles/main.css';
import '../src/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <MBProvider apiKey={process.env.NEXT_PUBLIC_INFURA_KEY ?? ""}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SidebarProvider>
      </QueryClientProvider>
    </MBProvider>
  );
}

export default App;
