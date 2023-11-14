import { useContext, useState } from "react";
import loginImage from "../assets/register.png";
import { Link } from "react-router-dom";
import userImage from "../assets/user.png";
import { userContext } from "../context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const router = useNavigate();
  const context = useContext(userContext);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      showError("Please fill all the fields");
      return;
    } else if (!user.email.includes("@")) {
      showError("Please enter a valid email");
      return;
    } else if (
      user.email === "syedhanaan1@gmail.com" &&
      user.password === "123456"
    ) {
      context.setUser(user);
      setUser({
        email: "",
        password: "",
      });
      router("/dashboard");

      setError("");
    } else {
      context.setUser(user);
      setUser({
        email: "",
        password: "",
      });
      setError("");
    }
  };
  return (
    <div className="flex px-5 md:px-0 items-center max-w-4xl justify-center mx-auto relative  mt-5">
      <img
        src={userImage}
        alt="profile"
        className="w-20 h-20 absolute top-0 right-0 -mt-4 -mr- md:-mt-10 md:-mr-10"
      />
      <div className=" text-gray-500 rounded-md shadow-2xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2  py-2 px-10 ">
            <img
              src={loginImage}
              alt="registerImage"
              className="mx-auto object-cover w-full h-full"
            />
          </div>
          <form
            onSubmit={formSubmitHandler}
            className="w-full md:w-1/2 py-2 px-5 md:px-10 bg-secondary"
          >
            <div className="text-center mb-10 mt-2">
              <h1 className="font-bold text-3xl text-white">LOGIN</h1>
            </div>
            <div className="flex justify-center">
              {error && (
                <div className=" bg-red-500 text-white text-xs w-[90%] py-2 px-2 mb-4 rounded-md ">
                  {error}
                </div>
              )}
            </div>

            <div>
              <div className="flex -mx-3 justify-center">
                <div className="w-[90%] px-3 mb-5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold px-1 text-white"
                  >
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg  outline-none focus:border-secondary"
                      placeholder="johnsmith@example.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3 justify-center">
                <div className="w-[90%] px-3 mb-8">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1 text-white"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg  outline-none "
                      placeholder="************"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col -mx-3 items-center justify-center gap-5">
                <div className="w-full px-3">
                  <button className="block w-full max-w-xs mx-auto bg-heading text-white rounded-lg px-3 py-3 font-semibold hover:opacity-95">
                    LOGIN
                  </button>
                </div>
                <p className="text-sm text-white mb-2">
                  Don't have an account?&nbsp;
                  <Link
                    to="/register"
                    className="text-heading hover:opacity-90 transition duration-300"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
