import React from 'react'
import Button from '../components/atom/Button/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  }
  );

  return (
    <div class="min-h-screen flex flex-col bg-gray justify-center py-12 px-6 lg:px-8">
      <div class="bg-black sm:mx-auto mt-8 sm:w-full sm:max-w-md py-8 px-6 shadow rounded-lg">
        <h1 class="text-[32px] text-white mt-2 mb-4 text-left">Login</h1>
      <form class="mb-0 space-y-6 ">
        <div class="mt-2">
        <input 
        type="email" 
        placeholder="Enter your email" 
        name="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300"
        />
        </div>
          <div class="mt-2">
        <input
        type="password" 
        placeholder="Enter your password" 
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300"
        />
            </div> 
       <Button title="Login" onClick={handleLogin} />
      </form>
      </div>
    </div>
  )
}

export default  Login;