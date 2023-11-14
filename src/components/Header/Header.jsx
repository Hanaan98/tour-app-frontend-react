import { useEffect, useState, useContext } from "react";
import logo from "../../assets/Desi__7_-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../context/ContextProvider";
const Header = () => {
  const context = useContext(userContext);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col">
        <nav
          className={`flex justify-around py-4 bg-white/80 ${
            scroll ? "backdrop-blur-md shadow-md" : ""
          }  w-full fixed top-0 left-0 right-0 z-10`}
        >
          <div className="flex items-center">
            <Link to="/">
              <h3 className="text-2xl font-medium text-blue-500">
                <img
                  className="h-10 object-cover"
                  src={logo}
                  alt="Store Logo"
                />
              </h3>
            </Link>
          </div>

          <div className="items-center hidden space-x-8 lg:flex">
            <NavLink
              to="/"
              className={(navClass) =>
                `flex text-${
                  navClass.isActive ? "secondary" : "text"
                } hover:text-secondary cursor-pointer transition-colors duration-300`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tours"
              className={(navClass) =>
                `flex text-${
                  navClass.isActive ? "secondary" : "text"
                } hover:text-secondary cursor-pointer transition-colors duration-300`
              }
            >
              Tours
            </NavLink>

            <NavLink
              to="/about"
              className={(navClass) =>
                `flex text-${
                  navClass.isActive ? "secondary" : "text"
                } hover:text-secondary cursor-pointer transition-colors duration-300`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={(navClass) =>
                `flex text-${
                  navClass.isActive ? "secondary" : "text"
                } hover:text-secondary cursor-pointer transition-colors duration-300`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={(navClass) =>
                `flex text-${
                  navClass.isActive ? "secondary" : "text"
                } hover:text-secondary cursor-pointer transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center space-x-3 ">
            {context.user.email !== "" ? (
              <button
                onClick={() => {
                  context.setUser({ email: "", password: "" });
                }}
                className="hidden lg:block px-6 py-2 text-white bg-heading rounded-full hover:opacity-90 transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <button className="hidden lg:block  text-heading hover:text-secondary  rounded-md  transition-colors duration-300">
                  <Link to="/login">Login</Link>
                </button>
                <Link to="/register">
                  {" "}
                  <button className="hidden lg:block px-6 py-2 text-white bg-secondary rounded-full hover:bg-primary transition-colors duration-300">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
