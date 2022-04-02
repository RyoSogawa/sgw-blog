import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div className={'flex flex-col min-h-screen'}>
      <Header />
      <div className={'grow'}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
