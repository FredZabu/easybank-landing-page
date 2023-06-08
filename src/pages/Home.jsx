import React from 'react'
import {Navbar, Header } from "../components/index.js"

function Home() {
  return (
    <div className=''>
      <div className="relative z-50 bg-white"><Navbar /></div>
      <Header />
    </div>
  )
}

export default Home