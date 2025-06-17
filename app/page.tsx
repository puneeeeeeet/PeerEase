"use client"
import HomeComponent from "./pages/Home/page.tsx"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import {useRouter} from 'next/navigation'
import {signOut} from 'firebase/auth'

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem('user')

  if(!user && !userSession){
    router.push('/SignUp')
  }

  return (
   
      <>
      <HomeComponent />
     <button onClick={()=>signOut(auth)}>SignOut</button>
      </>
     

  );
}
