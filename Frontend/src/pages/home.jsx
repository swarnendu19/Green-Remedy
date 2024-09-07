import React from "react";
import { useState, useEffect } from "react";
import bg from "../../public/bg.mp4";
import Navbar from "./Navbar";

function home() {
  return (
    <>
      <div className="overflow-hidden">
      <Navbar />
      <video className="videoTag w-full h-full" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="bg-black/40 h-full w-full z-200 absolute top-0 left-0">
       Hi 
      </div>
      {/* <div className="w-full h-screen "> */}
      <button className="btn btn-outline h-10 w-20 btn-success absolute bottom-40 right-40">Success</button>
      {/* </div> */} 
      </div>
    </>
  );
}

export default home;
