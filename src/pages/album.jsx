import React from 'react'
import { PRODUCTS } from '../products'
import { Product } from "../pages/shop/product";

export const Album = () => {
  const otherProducts = PRODUCTS.filter(product => product.type === "album");
  return (
    <div className='album-sec'>
        <div className="products">
        {otherProducts.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}
