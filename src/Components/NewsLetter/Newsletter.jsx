import React from 'react'
const Newsletter = () => {
  return (
    <div className='w-full min-h-[50vh] flex flex-col items-center justify-center mx-auto px-36 mb-36 gap-8'>
        <h1 className="text-[#454545] text-5xl font-semibold">Get Exclusive Offers on Your Email</h1>
        <p className="text-[#454545] text-xl">Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[700px] h-[50px] rounded-[80px] border border-[#e3e3e3]">
            <input className="w-[500px] ml-8 border-none outline-none text-[#616161] text-base bg-transparent" type='email' placeholder='Your Email id'/>
            <button className="w-[200px] h-[50px] rounded-[80px] bg-black text-white text-base cursor-pointer">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter