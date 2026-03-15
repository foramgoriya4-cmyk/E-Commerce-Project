import React from 'react'
import arrow_icon from "../../assets/arrow_icon.png"
const Bredcrums = (props) => {
const {product} = props;
  return (
    <div className='mx-auto mt-6 mb-8 flex w-full max-w-[1240px] items-center gap-2 px-4 md:px-6 text-xs md:text-sm font-semibold text-[#5e5e5e] dark:text-gray-300 capitalize'>
      Home <img src={arrow_icon} alt="arrow" className="h-2.5 w-2.5"/> SHOP <img src={arrow_icon} alt="arrow" className="h-2.5 w-2.5" />{product.category} <img src={arrow_icon} alt="arrow" className="h-2.5 w-2.5" /> {product.name}
    </div>
  )
}

export default Bredcrums