import React from 'react'

export const BlogCard = ({post}) => {

    const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };
  return (
   <div className="max-w-md bg-white rounded-2xl shadow-md overflow-hidden border">
  {/* <!-- Blog Image --> */}
  <img 
    src={post.Thumbnail} 
    alt="Blog thumbnail"
    className="h-48 w-full object-cover"
  />

  {/* <!-- Content --> */}
  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
      {post.Title}
    </h2>

    <p className="text-gray-600 text-sm mb-4">
      {stripHtml(post.Content).slice(0, 50)}
    </p>

    {/* Buttons */}
    <div className="flex justify-between items-center">
      <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        View
      </button>

      <button className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Edit
      </button>

      <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        Delete
      </button>
    </div>
  </div>
</div>

  )
}
