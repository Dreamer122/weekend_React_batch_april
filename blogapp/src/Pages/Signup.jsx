import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { account, databases } from "../lib/appwrite";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const user = await account.create(
        "unique()",
        data.Email,
        data.password,
        `${data.FirstName} ${data.LastName}`
      );

      await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_USER_ID,
        "unique()",
        {
          UserId: user.$id,
          FirstName: data.FirstName,
          LastName: data.LastName,
          Email: data.Email
        }
      );

      toast.success("Signup successful. Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow w-96 space-y-3"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {/* First Name */}
        <div>
          <input
            {...register("FirstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]{2,}$/,
                message: "Only letters, min 2 characters"
              }
            })}
            placeholder="First Name"
            className="w-full p-2 border rounded"
          />
          {errors.FirstName && (
            <p className="text-red-500 text-sm">{errors.FirstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            {...register("LastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]{2,}$/,
                message: "Only letters, min 2 characters"
              }
            })}
            placeholder="Last Name"
            className="w-full p-2 border rounded"
          />
          {errors.LastName && (
            <p className="text-red-500 text-sm">{errors.LastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format"
              }
            })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm">{errors.Email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message:
                  "Min 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special char"
              }
            })}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={!isValid || loading}
          className="w-full bg-green-600 disabled:bg-gray-400 text-white p-2 rounded"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </section>
  );
};
