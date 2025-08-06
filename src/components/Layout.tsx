import React, { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen lg:flex">
      <Navbar />

      <main className="flex-grow px-6 py-10 m-12 max-w-7xl mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout