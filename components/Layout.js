import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
