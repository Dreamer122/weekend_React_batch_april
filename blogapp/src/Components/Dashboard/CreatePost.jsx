import React from 'react'
import { BlogForm } from './BlogForm'
import {storage} from  "../../lib/appwrite"
import { ID } from 'appwrite'
import { createPost } from '../../lib/database'
import {useSelector} from "react-redux"
import toast from 'react-hot-toast'
import {useNavigate} from "react-router-dom"

export const CreatePost = () => {
  const navigate=useNavigate()
const {user}=useSelector((state)=>state.auth)
 const id=user.userId
    const onSubmit= async(data)=>{
      const result= createPost(data,id)
      if(result){

        toast.success("post created successfully")
        navigate(`/dashboard/${id}`)

      }
      else{
        toast.error("error occured while posting")
      }


    }
  return (
    <>
    <div> 
        <h2> Create Post</h2>
        <BlogForm onSubmit={onSubmit}/>
    </div>
    </>
  )
}
