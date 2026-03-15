import React from 'react'
const LoginSignup = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] pt-12'>
      <div className="w-[500px] bg-white mx-auto px-16 py-10 border border-black rounded-[20px] pb-24">
        <h1 className="text-2xl font-bold my-2.5">Sign Up</h1>
        <div className='flex flex-col gap-8 mt-8'>
          <input className="h-10 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg font-medium cursor-pointer" type='text' placeholder='Your Name'/>
          <input className="h-10 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg font-medium cursor-pointer" type='email' placeholder='Email Address'/>
          <input className="h-10 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg font-medium cursor-pointer" type='password' placeholder='Password'/>
          <button className="w-full h-10 text-white bg-[#ff4141] mt-2.5 border-none text-xl font-medium cursor-pointer">Continue</button>
        </div>
        
        <p className="mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account ? <span className="text-[#ff4141] font-semibold cursor-pointer">Login here</span>
        </p>
        <div className='flex items-center mt-6 gap-5 text-[#5c5c5c] text-sm font-medium'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup