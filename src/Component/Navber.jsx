import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { LuPanelLeftClose } from "react-icons/lu";

const Navbar = (props) => {
  // console.log(props);

  const [show, setshow] = useState(true);
  const handleform = () => {
    setshow(!show);
  };
  const handlesearch = (e) => {
    //  console.log(e.target.value);
    let searchItem = e.target.value;
    props.search(searchItem);
  };
  return (
    <div className="w-full h-[64px] sticky top-0  left-0 right-0 z-50">
      <nav className="w-full bg-gradient-to-b from-blue-800 to-stone-900 ">
        <div className=" mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white">Ecommerce</h1>

          <CiMenuFries
            onClick={handleform}
            size={30}
            className="lg:hidden block"
          />

          {show && (
            <ul className="hidden lg:flex gap-4 items-center">
              <input
                type="text"
                name=""
                onChange={handlesearch}
                id=""
                className=" outline-none border-2  rounded-xl py-1.5 px-1.5 me-0 text-amber-50 "
                placeholder="what do you want"
              />
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
                  className="bg-yellow-300 text-black px-3 py-1 rounded-md hover:bg-yellow-500 hover:text-white"
                >
                  Cart
                  <sup className="text-green-900">{props.Cartarr.length}</sup>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-green-300 text-black px-3 py-1 rounded-md hover:bg-green-400 hover:text-white "
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
          )}
          {/* mobile navbar */}
          {!show && (
            <ul className="pt-4  p-25 flex-col flex w-[160px] gap-7 items-center h-screen z-50 absolute top-0 left-0 bg-[rgba(71,30,30,0.6)] text-white">
              <li className="">
                <Link
                  to="/"
                  className="text-2xl font-bold text-white mt-6 p-0 me-9"
                >
                  Ecommerce
                </Link>
              </li>
              <li>
                 <LuPanelLeftClose className="text-xl hover:scale-150 m-0 " 
            onClick={handleform}/>
              </li>
              <li>
                <input
                  type="text"
                  name=""
                  onChange={handlesearch}
                  id=""
                  className=" outline-none border-2  rounded-xl py-1.5  me-0 text-amber-50 "
                  placeholder="what do you want"
                />
              </li>
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
                  <sup className="text-green-900">{props.Cartarr.length}</sup>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/Singin"
                  className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Singup
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
