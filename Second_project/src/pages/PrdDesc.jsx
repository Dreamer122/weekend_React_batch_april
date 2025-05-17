import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { useCallApi } from '../util/useCallApi'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
export const PrdDesc = () => {
    const {id}=useParams()
    const {addCart}=useContext(CartContext)
    console.log(id)
    const [productdata] =useCallApi(`https://dummyjson.com/products/${id}`)
    const [image,setimage]=useState(productdata?.images[0])
  
  return (
    <div>
       
       <div className='flex items-center justify-center'>
        <div className='left border w-5/12'>
        <div className='mainimage '>
        <img src={image? image:productdata?.thumbnail} alt="" className='h-full w-full' />
        </div>
        <div className='imagesbar flex'>
{
    productdata?.images?.map((img,index)=>{
        return(
            <div className='images border cursor-pointer' key={index} onClick={()=>setimage(img)} >
            <img src={img} alt="" className='w-52' />
            </div>
        )
    })
}
        </div>
        </div>
       <div className='right w-5/12'>
        <h1 className='text-2xl font-bold'>{productdata?.title}</h1>
        <p className='text-lg font-semibold'>Description: {productdata?.description}</p>
        <p className='text-lg font-semibold'>Brand: {productdata?.brand}</p>
        <p className='text-lg '>Price: {productdata?.price}</p>
        <p className='text-lg '>Category: {productdata?.category}</p>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={()=>addCart(productdata)}>Add to Cart</button>
       </div>

       </div>
    </div>
  )
}
