import React from 'react'
import exclusive from "../../assets/exclu.webp"
const Offers = () => {
  return (
    <div className='w-[65%] h-[60vh] flex mx-auto mt-36 px-36 mb-36 bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]'>
        <div className="flex-1 flex flex-col justify-center">
           <h1 className="text-[#171717] text-4xl">Exclusive</h1>
           <h1 className="text-[#171717] text-4xl">Offers For You</h1>
           <p className="text-[#171717] text-lg font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
           <button className="w-[200px] h-10 rounded-[35px] bg-[#ff4141] border-none text-white text-base font-medium mt-8 cursor-pointer">Check Now</button>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <img src={exclusive} alt="" className="h-[330px]" />
        </div>
    </div>
  )
}

export default Offers