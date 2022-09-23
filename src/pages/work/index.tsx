import Layout from '../../components/common/Layout';
import Heading from '../../components/ui/Heading';

import type { NextPage } from 'next';

const PageWorks: NextPage = () => (
  <Layout>
    <div className="container pt-32 pb-20">
      <Heading as="h1">Works</Heading>
      <p className="mt-8 text-center">Now Developing...🛠</p>
    </div>
  </Layout>
);

export default PageWorks;
