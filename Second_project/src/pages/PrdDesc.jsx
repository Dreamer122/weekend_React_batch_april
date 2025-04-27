import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'

export const PrdDesc = () => {
    const {id}=useParams()
    console.log(id)
    const [productdata,setProductData]=useState({})
    const [image,setimage]=useState("")

    // call api to get product by id
    const getProduct=async()=>{
     const resp=await  fetch(`https://dummyjson.com/products/${id}`);
     const data=await resp.json()
     console.log(data)
     setProductData(data)
     setimage(data.images[0])
    }

    useEffect(()=>{
        getProduct()
    },[])
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
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add to Cart</button>
       </div>

       </div>
    </div>
  )
}
