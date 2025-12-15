import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserData,getUserAllPost } from "../../lib/database";
import { Link } from "react-router-dom";
import { BlogCard } from "./BlogCard";

export const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);
  const [posts,setPosts]=useState([])
const userid=user.userId

  const getpost= async()=>{
   const res= await getUserAllPost(userid)
   setPosts(res)
  console.log("user posts",res)

  }
  useEffect(() => {
    const getData = async () => {
      const result = await getUserData(user?.userId);
      setUserData(result);
      console.log(result)
    };

    getData();
    getpost();
  }, [user.userId]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
    <div className="flex gap-4 items-center">
      <img
        src={
          userData.ProfilePic
            ? userData.ProfilePic
            : `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                `${userData.FirstName} ${userData.LastName}`
              )}`
        }
        alt="profile"
        className="h-12 w-12 rounded-full"
      />

      <div>
        <h2>
          Name: {userData.FirstName} {userData.LastName}
        </h2>
        <h2>Email: {userData.Email}</h2>
      </div>

      <Link to="/createpost" className="text-blue-600 underline">
        Create Post
      </Link>
    </div>

    <div>
{
  posts.length===0 ? <p>No posts found</p> : posts.map((post)=>{
    return(
<BlogCard key={post.$id} post={post}/>
    )
  })
}

    </div>
    </div>
  );
};
