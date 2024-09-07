import React from "react"
 import { useState,useEffect } from "react";
import bg from '../../public/bg.mp4'

function home() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
    return (
      <>
        <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ulxplore
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Explore</a></li>
        <li>
          <a>About Us</a>
        </li>
        <li><a>Contact Us</a></li>
      </ulxplore>
    </div>
    <a className="btn btn-ghost text-xl">GreenRemedy</a>
  </div>
  <div className="form-control ml-10">
  <div className="flex justify-between focus:outline-none border-[0.8px] border-black-100 rounded-md">
      <input type="text" placeholder="Search" className="input  border-none w-72 md:w-96" />
      <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
      </div>
  </div>
   
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Explore</a></li>
        <li>
          <a>About Us</a>
        </li>
        <li><a>Contact Us</a></li>
    </ul>
    

  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
         </div>

         <div>
         
         </div>
         <video className='videoTag w-full fixed' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
</video>
      </>
    )
  }
  
  export default home