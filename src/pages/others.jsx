import React from 'react'
import enhypen from "../assets/products/manifesto-album.jpg"
import "../pages/others.css"
import { PRODUCTS } from '../products'
import { Product } from "../pages/shop/product";

export const Others = () => {
    const otherProducts = PRODUCTS.filter(product => product.type === "others");
  return (
    <div className='sample'>

        
        <div className="products">
        {otherProducts.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>

    
  )
}
