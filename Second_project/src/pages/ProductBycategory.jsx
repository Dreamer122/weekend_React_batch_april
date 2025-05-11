import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router'
import { useCallApi } from '../util/useCallApi'

import { ProductCard } from '../Components/ProductCard'
export const ProductBycategory = ({addtocart}) => {
 const {category}=  useParams()
//  console.log(data.category)
//  const [productdata,setProductData]=useState([])
 const [productdata]= useCallApi(`https://dummyjson.com/products/category/${category}`)
// const productdata=data.products
// console.log(data)
// call api to get product by category
// const getProducts=async()=>{
//     const res=await fetch(`https://dummyjson.com/products/category/${category}`)
//     const data=await res.json()
//     console.log(data)
//     setProductData(data.products)
// }

//  useEffect(()=>{
// getProducts()
//  },[])
  return (
  <>
  
  <h3>Products in {category.toUpperCase()}</h3>
  <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-4'>
{

productdata?.products?.map((prd,index)=>{
    return(
     <Link to={`/productpage/${prd.category}/productdescription/${prd.id}`} key={prd.id}>  
      <ProductCard addtocart={addtocart}  prd={prd}/> </Link>
    )
})
}

  </div>
  </>
  )
}
