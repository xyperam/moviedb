import React from 'react'
import Button from '../components/atom/Button/Button';

function Login() {
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
        // value={form.email}
        // onChange={(e)=>setForm({...form, email: e.target.value})}
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300"
        />
        </div>
          <div class="mt-2">
        <input
        type="password" 
        placeholder="Enter your password" 
        name="password"
        // value={form.password}
        // onChange={(e)=>setForm({...form, password: e.target.value})}
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300"
        />
            </div> 
       <Button title="Login" />
      </form>
      </div>
    </div>
  )
}

export default  Login;