import React from 'react'
import Image from "next/image"
import logo from '../../assets/logo.png'
import homepage from '../../assets/home3.jpg'
import Link from 'next/link'

const HomeComponent = () => {
  return (
    <>
    <div className="flex justify-between py-1.5 items-center shadow-xl fixed w-full bg-white">
      {/* <Image src={logo} alt="logo"/> */}
      <div className="p-2  w-fit text-4xl font-bold pl-10"> PeerEase</div>
      <div className="flex gap-2 pr-30 h-fit text-xl font-bold text-gray-700">
      <div className="p-2 "> Home</div>
      <div className="p-2  "> About</div>
      <div className="p-2 "> How it Works</div>
      <div className="p-2 "> Join as Mentor</div>
      <div className="p-2 text-white bg-[#6e7bdc] rounded-md"> Get Help!</div>
      </div>
      
    </div>
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-10 flex-col flex gap-2 h-full mt-20  px-20">
        <p className="text-7xl  font-bold mt-44 ">Bridge the Gap From Doubt to Success...</p>
        <Link className="p-3 bg-[#6e7bdc] rounded-md text-xl text-white w-fit mt-10" href='/'>Get Started</Link>
      </div>
      <div className="p-20">
        <Image src={homepage} alt="home" className="shadow-2xl w-100  mt-36"></Image>
      </div>
      
      <div></div>
    </div>
    <div className=" w-full ">
      <div className="p-10 flex justify-between px-20"> 
        
      <div className="w-1/5 h-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-lg p-2">
      <Image src={homepage} className="w-1/2 h-fit" alt="request"></Image>
      <p className="text-2xl font-bold">Post a Request</p>
      <p className="text-center">Got stuck? Just post it here and find your solution</p>
      </div>

      <div className="w-1/5 h-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-lg p-2">
      <Image src={homepage} className="w-1/2 h-fit" alt="request"></Image>
      <p className="text-2xl font-bold">Get Expert Help</p>
      <p className="text-center">Got stuck? Just post it here and find your solution</p>
      </div>

      <div className="w-1/5 h-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-lg p-2">
      <Image src={homepage} className="w-1/2 h-fit" alt="request"></Image>
      <p className="text-2xl font-bold">Earn Points</p>
      <p className="text-center">Got stuck? Just post it here and find your solution</p>
      </div>

      <div className="w-1/5 h-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-lg p-2">
      <Image src={homepage} className="w-1/2 h-fit" alt="request"></Image>
      <p className="text-2xl font-bold">Earn Points</p>
      <p className="text-center">Got stuck? Just post it here and find your solution</p>
        </div>
      </div>

      <div className="w-full flex text-xl">
          <div className="w-1/2 p-20  "> 
          <p className=" text-3xl font-extrabold pb-7">About us</p>
          <p>About </p>
          <p>Contact</p>
          </div>
          <div className="w-1/2 p-20 ">
          <p className=" text-3xl font-extrabold pb-7">Privacy Policy</p>
          <p>Terms of service </p>
          <p>Contact</p>
           </div>
      </div>
      <div className="w-full bg-[#6e7bdc] h-44 bottom-0 text-white text-6xl px-20 py-10 font-extrabold">
        <p>PeerEase</p>

      </div>

    </div>
    </>
    
  )
}

export default HomeComponent