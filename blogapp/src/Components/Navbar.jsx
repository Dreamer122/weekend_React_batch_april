import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Redux/Authslice";
import { account } from "../lib/appwrite";
import toast from "react-hot-toast";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await account.deleteSession(user.id);

      dispatch(logOut());
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="flex justify-center py-2 text-2xl">
      <ul className="flex gap-4 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">All Blogs</Link></li>

        {user ? (
          <li>
            <button
              className="bg-red-600 text-white rounded px-4 py-2"
              onClick={Logout}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <li>
            <Link to={`/dashboard/${user.userId}`}>Dashboard</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
