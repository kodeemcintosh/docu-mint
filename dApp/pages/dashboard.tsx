import Img from 'next/image';
import { useRouter } from 'next/router';
import { Main } from 'src/templates/Main';

const Dashboard = () => {
  // Connect Wallet
  const router = useRouter();

  return (
    <></>
  );
};

export default Dashboard;

interface TokenProps {
  uri: string;
}

const Erc721 = ({ uri = '' }: TokenProps) => (
  <Img
    className="flex flex-col w-24 h-42 rounded-lg py-2 px-4"
    src={uri}
    alt="Token data is re-syncing on IPFS"
  />
);
