'use client'
import React from 'react'
import Image from "next/image"
import logo from "../assets/logo.png"
import google from "../assets/google.svg"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation'

const SignUp= () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const[createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleSignUp = async () => {
    try {
        const res = await createUserWithEmailAndPassword(email, password)
        console.log({res})
        setEmail('')
        setPassword('')
        router.push('/SignIn')
    } catch (error) {
        console.log(error)
    }

    console.log('user credentials: ',{email, password})
  }

  return (
    <>
    <div className="bg-[#DEDEDE] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-1/4 h-3/5 flex-col relative ">
        <Image
          className=" absolute top-[-90px] "
          src={logo}
          alt="logo"
        ></Image>
        <div className=" flex flex-col gap-2 items-center  absolute inset-x-0 bottom-10 z-10 ">
          <input
            type="email"
            className=" border-1 w-4/5 rounded-sm py-2 text-xl border-[#B0B0B0] px-1"
            value={email}
            placeholder="Username or Email"
            onChange= {(e)=> setEmail(e.target.value)}
            autoFocus
          ></input>
          <input
            className=" border-1 w-4/5 rounded-sm py-2 px-1 text-xl border-[#B0B0B0]"
            type="password"
            value={password}
            onChange= {(e)=> setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <button onClick={handleSignUp} className="bg-[#3CA6AC] w-4/5 rounded-md h-12 text-white font-bold text-xl cursor-pointer">
            Sign Up
          </button>
          <div className="flex w-full justify-around px-2">
            <div className="text-red-600 text-[15px] cursor-pointer">
              Forgot Password?
            </div>
            <button  className="text-blue-800 font-bold cursor-pointer">
              Sign Up
            </button>
          </div>

          <p className="text-[#B0B0B0] mt-4"> Or you can sign in with </p>
          {/* <button className="cursor-pointer" ><Image src={google} alt="Google"></Image></button> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp