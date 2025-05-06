import React, { useState } from 'react';
import { Link, Links } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [show, setshow] = useState(true)
  const handleform = () => {
    setshow(!show)
  }
  return (
    <div className='w-full h-[64px] fixed top-0  left-0 right-0 z-50'>
      <nav className="w-full bg-gradient-to-b from-blue-800 to-stone-900 ">
        <div className=" mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white">Ecommerce</h1>


          <CiMenuFries onClick={handleform} size={30} className="lg:hidden block" />


          {show && <ul className="hidden lg:flex gap-4 items-center">
            <li>
              <Link
                to="/"
                className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Singin"
                className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white "
              >
                Register
              </Link>
            </li>
          </ul>
          }
          {!show && <ul className="pt-4 flex-col flex w-[200px] gap-10 items-center h-screen z-50 absolute top-0 left-0 bg-[rgb(0,0,0,0.6)] text-white">
            <li> <Link to="/" className="text-2xl font-bold text-white mt-6  " >Ecommerce </Link></li>
            <li> <Link to="/" className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white" >  Home</Link></li>
            <li> <Link to="/cart" className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white" >  Cart</Link></li>
            <li> <Link to="/login" className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white" >  Login</Link></li>
            <li> <Link to="/Singin" className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white" >  Singup</Link></li>
          </ul>}
        </div>
      </nav>
   
      </div>
  );
};

export default Navbar;
