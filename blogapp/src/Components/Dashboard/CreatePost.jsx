import React from 'react'
import { BlogForm } from './BlogForm'
import {storage} from  "../../lib/appwrite"
import { ID } from 'appwrite'
export const CreatePost = () => {

    const handleSubmit= async()=>{
        const result = await storage.createFile({
    bucketId: import.meta.env.VITE_BUCKET_ID,
    fileId: ID.unique(),
    file: ""
});
    }
  return (
    <>
    <div> 
        <h2> Create Post</h2>
        <BlogForm/>
    </div>
    </>
  )
}
