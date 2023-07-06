
import { useRouter } from 'next/router';

import { Meta } from 'src/layouts/Meta';
import { Main } from 'src/templates/Main';

export const getStaticProps = async ({}) => {
  return {
    props: {

    }
  }
}

const Burn = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
    </Main>
  );
};

export default Burn;
