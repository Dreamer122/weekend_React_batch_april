import { Query } from "appwrite";

import { databases } from "./appwrite";
const dbid = import.meta.env.VITE_DATABASE_ID;
const userColl = import.meta.env.VITE_COLLECTION_USER_ID;
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
    // const result = await databases.listDocuments(
    //   dbid,
    //   userColl,
    //   [
    //     Query.equal("UserId",id)
    //   ]
    // );
    let result = await tablesDB.listRows({
    databaseId: dbid,
    tableId: userColl,
    queries: [
        Query.equal('UserId', id)
    ]
});
    

    // return result.documents[0]; // ✅ mostly single user
    return result.rows[0]; // ✅ mostly single user
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
