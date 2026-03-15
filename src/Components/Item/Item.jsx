import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-full border border-gray-200 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white'>
       <Link to={`/product/${props.id}`} onClick={()=>window.scrollTo(0,0)}>
         <img src={props.image} alt={props.name} className="w-full h-[220px] object-cover" />
       </Link>
       <div className="p-3">
         <p className="text-[#383838] text-sm font-medium truncate mb-2">{props.name}</p>
         <div className='flex items-center gap-4'>
             <span className="text-[#ff4141] text-base font-bold">${props.new_price}</span>
             <span className="text-[#8c8c8c] text-sm font-medium line-through">${props.old_price}</span>
         </div>
       </div>
    </div>
  )
}

export default Item