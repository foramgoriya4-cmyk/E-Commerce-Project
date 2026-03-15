import React from 'react'
import new_collections from '../../assets/newcollections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-2.5 mb-24'>
        <h1 className="text-[#171717] text-4xl font-semibold">NEW COLLECTIONS</h1>
        <hr className="w-[200px] h-1.5 rounded-full bg-[#252525] border-none"/>
        <div className='mt-12 grid grid-cols-4 gap-8'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections