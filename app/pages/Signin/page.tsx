import React from 'react'
import Image from "next/image"
import logo from "../../assets/logo.png"

const Signin = () => {
  return (
    <div className="bg-[#DEDEDE] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-1/4 h-3/5 flex-col relative ">
            <Image className=" absolute z-10 top-[-100px]" src={logo} alt={logo}></Image>
            <div className=" flex flex-col gap-1 items-center  absolute inset-x-0 bottom-[180px] ">
            <input  className=" border-1 w-3/4 rounded-md border-[#B0B0B0] " placeholder=" Username or Email" autoFocus></input>
            <input className=" border-1 w-3/4 rounded-md border-[#B0B0B0]" placeholder=" Password"></input>
              <button className="bg-[#3CA6AC] w-3/4 rounded-md h-10 text-white font-bold text-xl cursor-pointer">Sign In</button>
              <div className="flex w-full justify-around px-2">
              <div className="text-[#B0B0B0] text-l cursor-pointer">Forgot Password?</div>
              <div className="text-blue-800 font-bold cursor-pointer">Sign Up</div>
                </div>
              
            </div>
        </div>

    </div>
  )
}

export default Signin