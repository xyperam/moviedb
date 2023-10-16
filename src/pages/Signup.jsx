import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Container } from 'postcss'
import React from 'react'
import { useState } from 'react'
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import {Button, Input} from '../components';

function Signup() {
const navigate = useNavigate(); 
const [form , setForm] = useState({
  email: "",
  password: ""
});

const handleSignup = async () => {
  try {
    const {email,password} = form;
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
  } catch (error) {
    console.log(error);
  };  
};

onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (currentUser) navigate("/login");
});


  return (
    <div className="min-h-screen flex flex-col bg-gray justify-center py-12 px-6 lg:px-8">
      <div className="bg-black sm:mx-auto mt-8 sm:w-full sm:max-w-md py-8 px-6 shadow rounded-lg">
        <h1 className="text-[32px] text-white mt-2 mb-4 text-left">Signup</h1>
      <form className="mb-0 space-y-6 ">
        <div className="mt-2">
        <Input 
        type="email" 
        placeholder="Enter your email" 
        name="email" 
        value={form.email}
        onChange={(e)=>setForm({...form, email: e.target.value})}
        />
        </div>
          <div className="mt-2">
        <Input
        type="password" 
        placeholder="Enter your password" 
        name="password"
        value={form.password}
        onChange={(e)=>setForm({...form, password: e.target.value})}
        />
            </div> 
            <Button title="Signup" onClick={handleSignup} />

      </form>
      </div>
    </div>
    
  )
}

export default  Signup;