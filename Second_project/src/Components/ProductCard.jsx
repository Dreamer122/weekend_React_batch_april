import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
export const ProductCard = (props) => {
  const {prd}=props
  console.log(props)
 const {addCart}= useContext(CartContext)

  return (
   <>
   <div  className="group">
              <img
                alt={prd.title}
                src={prd.thumbnail}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{prd.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{prd.price}</p>
            <button onClick={()=>addCart(prd)}>add to cart</button>
            </div>
   </>
  )
}
