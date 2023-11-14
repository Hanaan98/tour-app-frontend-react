import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/NotFound";
import BlogPost from "../pages/BlogPost";
import { userContext } from "../context/ContextProvider";
import { useContext } from "react";
import Dashboard from "../pages/Dashboard";
const RoutesFile = () => {
  const context = useContext(userContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route
        path="/dashboard"
        element={
          context.user.email == "syedhanaan1@gmail.com" ? (
            <Dashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/login"
        element={context.user.email == "" ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={context.user.email == "" ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesFile;
