import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import useHoveringLink from '../../../lib/hooks/useHoveringLink'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  useHoveringLink()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
