import React from 'react';

import useHoveringLink from '../../../hooks/useHoveringLink';
import Footer from '../Footer';
import Header from '../Header';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  useHoveringLink();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
