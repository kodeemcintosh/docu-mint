
import { useState, PropsWithChildren } from "react";
import { Header } from '@components/Header';
import { Sidebar } from "@components/Sidebar";
import { Meta } from "@components/Meta";

interface LayoutProps extends PropsWithChildren<{}> {}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="flex h-full w-full bg-stripes-gray">
        <Meta
          title="Docu-mint NFT personal NFT deployer"
          description="Mint and send your own NFTs based on files that you upload. Powered by the Filecoin network."
        />
        <Header />
        <Sidebar />
        {children}
    </section>
  );
}
