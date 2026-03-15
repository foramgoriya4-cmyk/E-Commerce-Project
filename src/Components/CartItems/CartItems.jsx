import React, { useContext } from 'react'
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='mx-16 my-12'>
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8 py-2.5 text-[#454545] text-lg font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8 py-2.5 text-[#454545] text-[15px] font-medium'>
                            <img src={e.image} alt="" className="h-[100px]" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='h-10 w-24 border border-[#e2e2e2]'>
                                {cartItems[e.id]}
                            </button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=> removeFromCart(e.id)} className="h-5 cursor-pointer"/>
                        </div>
                        <hr className="h-[3px] bg-[#e2e2e2] border-0"/>
                    </div>
                }
                return null;
            })}
            <div className="flex mt-16">
                <div className="flex-1 flex flex-col mr-52 gap-8">
                    <h1 className="text-2xl font-semibold">cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-4">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className="border-[#e2e2e2]"/>
                        <div className="flex justify-between py-4">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className="border-[#e2e2e2]"/>
                        <div className="flex justify-between py-4">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className="w-[250px] h-[50px] outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold cursor-pointer">PROCEED TO CHECKOUT</button>
                </div>
                <div className="flex-1 text-base font-medium">
                    <p className="text-[#555]">If you have a promo code, Enter it here</p>
                    <div className="flex w-[300px] mt-4 pl-5 h-[50px] bg-[#eaeaea]">
                        <input className="border-none outline-none bg-transparent text-base w-[180px] h-[50px]" type='text' placeholder='promo code'/>
                        <button className="w-[120px] h-[50px] text-base bg-black text-white cursor-pointer">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems