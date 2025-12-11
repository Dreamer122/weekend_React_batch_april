import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { Signup } from "./Pages/Signup";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { CreatePost } from "./Components/Dashboard/CreatePost";
import { EditPost } from "./Components/Dashboard/EditPost";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route
            path="dashboard/:userid"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="createpost"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          <Route
            path="editpost/:postid"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
