import { useRouter } from 'next/router';

import { Meta } from 'src/layouts/Meta';
import { Main } from 'src/templates/Main';
import Img from "next/image";

const Dashboard = () => {
  // Connect Wallet
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Docu-Mint Wallet Dashboard"
          description="A place to connect your wallet to Docu-Mint and manage all things tokens."
        />
      }
    >
    </Main>
  );
};

export default Dashboard;

interface TokenProps {
  uri: string;
}

const Erc721 = ({ uri = "" }: TokenProps) => (
  <>
    <Img
      className="flex flex-col w-24 h-42 rounded-lg py-2 px-4"
      src={uri}
      alt="Token data is re-syncing on IPFS"
      />
  </>
)
