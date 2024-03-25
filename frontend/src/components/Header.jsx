import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex-w-full bg-white drop-shadow">
      
      <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
      
      <button className="inline-flex items-center justify-center bg-indigo-500 px-6 py-2 text-lg text-gray-50 font-medium 
      hover:bg-red-500
      tracking-wide">
        <Link to={'/add-product'}>
      Add Product
      </Link>
      </button>

      <button className="inline-flex items-center justify-center bg-indigo-500 px-6 py-2 text-lg 
      hover:bg-red-500
      text-gray-50 font-medium tracking-wide ">
      <Link to={'/add-visitor'}>
      Add Visitors
      </Link>
      </button>
      <button className="inline-flex items-center justify-center  px-6 py-2 text-lg bg-black text-white
      hover:bg-red-900
      font-medium tracking-wide uppercase">
        <Link to={'/logout'}>
      Logout
      </Link>
      </button>
      </div>
      
    </header>
  )
}

export default Header