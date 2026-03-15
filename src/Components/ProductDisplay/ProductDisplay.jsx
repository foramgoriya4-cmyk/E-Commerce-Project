import React, { useContext } from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart} = useContext(ShopContext);

  return (
    <div className='mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-[520px_1fr]'>
      <div className="grid grid-cols-[84px_1fr] gap-4 md:grid-cols-[96px_1fr]">
        <div className="flex flex-col gap-3">
          <img src={product.image} alt={product.name} className="h-24 w-full rounded-lg border border-gray-200 object-cover" />
          <img src={product.image} alt={product.name} className="h-24 w-full rounded-lg border border-gray-200 object-cover" />
          <img src={product.image} alt={product.name} className="h-24 w-full rounded-lg border border-gray-200 object-cover" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-[#1b1b1b]">
          <img className='h-[420px] w-full rounded-xl object-cover md:h-[520px]' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-[#1b1b1b]">
        <h1 className="text-[#222] dark:text-white text-3xl md:text-4xl font-bold">{product.name}</h1>
        <div className="mt-3 flex items-center gap-2 text-sm text-[#1c1c1c] dark:text-gray-300">
          <img src={star_icon} alt="star" className="h-5 w-5 object-contain" />
          <img src={star_icon} alt="star" className="h-5 w-5 object-contain" />
          <img src={star_icon} alt="star" className="h-5 w-5 object-contain" />
          <img src={star_icon} alt="star" className="h-5 w-5 object-contain" />
          <img src={star_dull_icon} alt="star" className="h-5 w-5 object-contain" />
          <p>(130 Reviews)</p>
        </div>

        <div className="my-5 flex items-center gap-6 text-xl font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>

        <div className="text-sm leading-relaxed text-[#555] dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
        </div>

        <div className='mt-5'>
          <h2 className="text-[#656565] dark:text-gray-300 text-sm font-semibold">Select Size</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="h-10 w-10 rounded-lg border border-[#ebebeb] bg-[#fbfbfb] dark:bg-[#2a2a2a] dark:border-gray-600 text-sm font-semibold cursor-pointer hover:border-[#ff4141]">S</button>
            <button className="h-10 w-10 rounded-lg border border-[#ebebeb] bg-[#fbfbfb] dark:bg-[#2a2a2a] dark:border-gray-600 text-sm font-semibold cursor-pointer hover:border-[#ff4141]">M</button>
            <button className="h-10 w-10 rounded-lg border border-[#ebebeb] bg-[#fbfbfb] dark:bg-[#2a2a2a] dark:border-gray-600 text-sm font-semibold cursor-pointer hover:border-[#ff4141]">L</button>
            <button className="h-10 w-10 rounded-lg border border-[#ebebeb] bg-[#fbfbfb] dark:bg-[#2a2a2a] dark:border-gray-600 text-sm font-semibold cursor-pointer hover:border-[#ff4141]">XL</button>
            <button className="h-10 w-12 rounded-lg border border-[#ebebeb] bg-[#fbfbfb] dark:bg-[#2a2a2a] dark:border-gray-600 text-sm font-semibold cursor-pointer hover:border-[#ff4141]">XXL</button>
          </div>
        </div>

        <button
          onClick={()=>{addTocart(product.id)}}
          className="mt-6 h-12 w-full max-w-[320px] rounded-full text-sm font-semibold text-white bg-[#ff4141] border-none outline-none cursor-pointer hover:bg-[#e13636] transition"
        >
          ADD TO CART
        </button>

        <div className="mt-5 text-sm text-[#444] dark:text-gray-300">
          <span className="font-semibold">Category: </span>
          <span>Women, T-Shirt, Crop Top</span>
        </div>
        <div className="mt-2 text-sm text-[#444] dark:text-gray-300">
          <span className="font-semibold">Tags: </span>
          <span>Modern, Latest, Trend Shorts</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay