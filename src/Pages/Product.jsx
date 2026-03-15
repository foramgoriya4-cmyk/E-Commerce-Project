import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../Components/Bredcrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));

  if (!product) {
    return (
      <div className="mx-auto my-20 w-full max-w-[1240px] px-4 md:px-6 text-center text-gray-600 dark:text-gray-300">
        Product not found.
      </div>
    )
  }

  return (
    <div className="pb-10">
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product