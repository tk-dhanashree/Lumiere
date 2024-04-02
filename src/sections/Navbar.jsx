import React from 'react'
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <div className='top-0 w-full flex justify-between py-12 px-8 z-20 '>
        <div className='h-5 sm:h-14 w-16 sm:w-44'>
            <img src={logo} alt="lumiere-logo" />
        </div>
    </div>
  )
}
