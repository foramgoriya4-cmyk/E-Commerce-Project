import React from 'react'
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 pt-16 pb-8 bg-white dark:bg-[#1e1e1e] border-t border-gray-100 dark:border-gray-700 mt-16 transition-colors duration-300'>
      {/* Logo */}
        <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="h-10" />
            <p className="text-[#383838] dark:text-white text-4xl font-bold">Shopify</p>
        </div>

        {/* Links */}
        <ul className='flex list-none gap-12 text-[#252525] dark:text-gray-300 text-xl'>
          <li className="cursor-pointer hover:text-[#ff4141] transition">About</li>
          <li className="cursor-pointer hover:text-[#ff4141] transition">Products</li>
          <li className="cursor-pointer hover:text-[#ff4141] transition">Offices</li>
          <li className="cursor-pointer hover:text-[#ff4141] transition">Company</li>
          <li className="cursor-pointer hover:text-[#ff4141] transition">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='flex gap-5'>
          <div className="w-12 h-12 flex items-center justify-center bg-[#fbfbfb] dark:bg-[#2a2a2a] border border-[#ebebeb] dark:border-gray-600 rounded cursor-pointer hover:shadow-md transition">
            <img src={instagram_icon} alt="instagram" className="h-7" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-[#fbfbfb] dark:bg-[#2a2a2a] border border-[#ebebeb] dark:border-gray-600 rounded cursor-pointer hover:shadow-md transition">
            <img src={facebook_icon} alt="facebook" className="h-7" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-[#fbfbfb] dark:bg-[#2a2a2a] border border-[#ebebeb] dark:border-gray-600 rounded cursor-pointer hover:shadow-md transition">
            <img src={whatsapp_icon} alt="whatsapp" className="h-7" />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-6 w-full">
            <hr className="w-4/5 h-[2px] bg-[#c7c7c7] dark:bg-gray-600 border-none rounded-full" />
            <p className="text-[#1a1a1a] dark:text-gray-400 text-base">Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer