import React from 'react'
import Image from "next/image"
import logo from '../../assets/logo.png'
import homepage from '../../assets/homepage1.jpg'
import Link from 'next/link'

const HomeComponent = () => {
  return (
    <>
    <div className="flex justify-between mt-2 items-center">
      {/* <Image src={logo} alt="logo"/> */}
      <div className="p-2  w-fit text-4xl font-bold "> PeerEase</div>
      <div className="flex gap-2 pr-30 h-fit">
      <div className="p-2 text-xl "> Home</div>
      <div className="p-2 text-xl "> About</div>
      <div className="p-2 text-xl "> How it Works</div>
      <div className="p-2 text-xl "> Join as Mentor</div>
      <div className="p-2 text-xl text-white bg-[#6e7bdc] rounded-md"> Get Help!</div>
      </div>
      
    </div>
    <div className="flex">
      <div className="w-1/2 p-10 flex-col flex gap-2 h-full mt-20  ">
        <p className="text-7xl  font-bold ">Bridge the Gap From Doubt to Success</p>
        <Link className="p-3 bg-[#6e7bdc] rounded-md text-xl text-white w-fit " href='/'>Get Started</Link>
      </div>
      <div className="p-20">
        <Image src={homepage} className=" h-1/2 shadow-2xl "></Image>
      </div>
      
      <div></div>
    </div>
    </>
    
  )
}

export default HomeComponent