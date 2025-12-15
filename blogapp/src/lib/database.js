import { Query,ID } from "appwrite";

import { storage,} from "./appwrite";
const dbid = import.meta.env.VITE_DATABASE_ID;
const userColl = import.meta.env.VITE_COLLECTION_USER_ID;
const bucketid=import.meta.env.VITE_BUCKET_ID
const postColl=import.meta.env.VITE_COLLECTION_POST
import { tablesDB } from "./appwrite";
export const blogCategories = [
  "Technology",
  "Travel",
  "Food & Recipes",
  "Lifestyle",
  "Health & Fitness",
  "Education & Learning",
  "Business & Entrepreneurship",
  "Digital Marketing",
  "Finance & Investment",
  "Personal Development",
  "Fashion & Beauty",
  "Entertainment & Movies",
  "News & Current Affairs",
  "Photography",
  "Coding & Web Development"
];

export const getUserData = async (id) => {
  try {
    
    let result = await tablesDB.listRows({
    databaseId: dbid,
    tableId: userColl,
    queries: [
        Query.equal('UserId', id)
    ]
});

    return result.rows[0]; // ✅ mostly single user
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// create post 
export const createPost=async(data,id)=>{
  try{

  console.log(data)

  // image upload bucket -> get url then post url in table
  const imagefile = await storage.createFile({
    bucketId: bucketid,
    fileId: ID.unique(),
    file: data.thumbnail?.[0]
});
console.log(imagefile)
const url=storage.getFileView({
    bucketId: bucketid,
    fileId:imagefile.$id})
  // create record
  const rowdata = await tablesDB.createRow({
    databaseId:dbid ,
    tableId: postColl,
    rowId: ID.unique(),
    data: {
      Title:data.title,
      userId:id,
      Content:data.blogContent,
      Category:data.category,
      Status:data.status,
      Thumbnail:url,
    }
  

  });
  console.log("postdata",rowdata)
  return rowdata
}
  
  catch(error){
    console.log(error,"error in creating post")
  }

}
//  update post
// export const updatePost=async()=>{
//   try{
//     const promise = tablesDB.updateRow(
//     dbid,
//     postColl,
//     '<ROW_ID>',
//     { title: 'Updated Title' }
// );

//   }catch(error){
// console.log(error,"error occured while updating post")
//   }
// }

export const getUserAllPost=async(userid)=>{
  try{
let result =await tablesDB.listRows({
    databaseId: dbid,
    tableId: postColl,
    queries:[
      Query.equal("userId",userid)
    ]
    
});
console.log(result)
return  result.rows
  }
  catch(error){
    console.log("error occured while fetching all posts",error)
  }
}