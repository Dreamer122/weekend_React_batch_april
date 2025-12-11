import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { blogCategories } from "../../lib/database";

export const BlogForm = ({
  onSubmit,
  defaultValues = {},

}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultValues.title || "",
      category: defaultValues.category || "",
      status: defaultValues.status || "draft",
      content: defaultValues.content || "",
    }
  });

  const [thumbnailPreview,setThumbnailPreview]=useState("")
//   for editor content
    const handleEditor = (content) => {
        setValue("blogContent", content)
        console.log(content)
    }
  // Watch content field
  const contentValue = watch("content");
  const thumbnail=watch("thumbnail")
  useEffect(()=>{
    console.log(thumbnail?.[0])
    if(thumbnail?.[0] instanceof File){
        const filereader=new FileReader()
        filereader.onloadend = () => {
            console.log("result",filereader,filereader.result)
                setThumbnailPreview(filereader.result)
            }
            filereader.readAsDataURL(thumbnail[0])

    }
  },[thumbnail])


//   upload thumbnail and submit data



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 space-y-4 border rounded-lg bg-white shadow"
    >
      {/* Thumbnail */}
      <div>
        <label className="font-semibold">Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          {...register("thumbnail", {
            required: !defaultValues.thumbnail && "Thumbnail is required",
          })}
          className="w-full border p-2 rounded"
        />
        {errors.thumbnail && (
          <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>
        )}
        
        
      </div>
      <div>
      {thumbnailPreview &&  <img src={thumbnailPreview} alt="thumbnail" className="h-56 w-56 "></img>}
      </div>

      {/* Title */}
      <div>
        <label className="font-semibold">Title</label>
        <input
          type="text"
          placeholder="Enter blog title"
          className="w-full border p-2 rounded"
          {...register("title", {
            required: "Title is required",
            minLength: { value: 3, message: "Minimum 3 characters" }
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Category Dropdown (datalist) */}
      <div>
        <label className="font-semibold">Category</label>
        <input
          list="categories"
          placeholder="Choose or type category"
          className="w-full border p-2 rounded"
          {...register("category", { required: "Category is required" })}
        />
        <datalist id="categories">
          {blogCategories.map((cat, i) => (
            <option key={i} value={cat} />
          ))}
        </datalist>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Content - SunEditor */}
      <div>
        <label className="font-semibold">Content</label>
        <SunEditor
          onChange={handleEditor}
          defaultValue={defaultValues.content || ""}
          height="300px"
          setOptions={{
            buttonList: [
              ["bold", "italic", "underline", "strike"],
              ["formatBlock", "fontSize", "align", "list"],
              ["link", "image", "video"],
              ["undo", "redo"]
            ]
          }}
        />
        {!contentValue && (
          <p className="text-red-500 text-sm">Content is required</p>
        )}
      </div>

      {/* Status */}
      <div>
        <label className="font-semibold">Status</label>
        <select
          className="w-full border p-2 rounded"
          {...register("status")}
        >
          <option value="draft">Draft</option>
          <option value="publish">Publish</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};
