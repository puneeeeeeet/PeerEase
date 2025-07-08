"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [college, setCollege] = useState("");
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async () => {
      console.log("Attempting signup with:", { email, password, role, college });
    
      try {
        const res = await createUserWithEmailAndPassword(email, password);
    
        console.log("Firebase signup response:", res);
    
        if (!res || !res.user) {
          alert("Signup failed: no user returned from Firebase.");
          return;
        }
    
        const user = res.user;
    
        await setDoc(doc(db, "users", user.uid), {
          email,
          role,
          college,
          createdAt: new Date(),
        });
    
        alert("Signup successful!");
        router.push("/SignIn");
      } catch (error: any) {
        console.error("Signup error:", error);
        alert("Firebase error: " + (error?.message || "Unknown error"));
      }
    };
    


  return (
    <div className="bg-[#DEDEDE] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md h-fit py-12 px-8 rounded-md shadow-xl relative">
        {/* <Image
          className="absolute top-[-170px] left-1/2 transform -translate-x-1/2"
          src={logo}
          alt="logo"
        /> */}
        <div className="flex flex-col gap-4 mt-10">
          <input
            type="email"
            className="border border-[#B0B0B0] rounded-md py-2 px-3 text-lg"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            className="border border-[#B0B0B0] rounded-md py-2 px-3 text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <select
            className="border border-[#B0B0B0] rounded-md py-2 px-3 text-lg"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select your role</option>
            <option value="newbie">Student</option>
            <option value="expert">Mentor</option>
          </select>

          <input
            type="text"
            className="border border-[#B0B0B0] rounded-md py-2 px-3 text-lg"
            value={college}
            placeholder="Enter your college name"
            onChange={(e) => setCollege(e.target.value)}
            required
          />
          <button
            onClick={handleSignUp}
            className="bg-[#3CA6AC] text-white text-xl font-bold rounded-md py-3 hover:bg-[#34999f] transition"
          >
            Sign Up
          </button>
          <div className="flex justify-center gap-2 text-sm mt-4">
            <p className="text-gray-600">Already have an account?</p>
            <button
              className="text-blue-600 font-semibold"
              onClick={() => router.push("/SignIn")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
