"use client";

import { useEffect, useState } from "react";
import HomeComponent from "./pages/Home/page.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");

    if (!user && !userSession) {
      router.push("/SignUp");
    } else {
      setChecked(true); // Allow rendering once session check is complete
    }
  }, [user]);

  if (!checked) return null; // Prevent rendering until the check is done

  return (
    <>
      <HomeComponent />
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </>
  );
}
