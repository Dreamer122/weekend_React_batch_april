import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { account } from "../lib/appwrite";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/Authslice";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Signin = async (data) => {
    try {
      setLoading(true);

      const session = await account.createEmailPasswordSession(
        data.Email,
        data.password
      );

      const loginData = {
        id: session.$id,
        userId: session.userId,
      };

      localStorage.setItem("loginDetails", JSON.stringify(loginData));
      dispatch(signin(loginData));

      toast.success("Login successful");
      navigate(`/dashboard/${session.userId}`);
    } catch (error) {
      toast.error("Invalid credentials");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(Signin)}
          className="bg-white p-6 rounded shadow w-96"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <input
            type="email"
            {...register("Email")}
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
};
