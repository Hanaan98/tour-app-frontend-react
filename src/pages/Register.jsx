import { useState } from "react";
import registerImage from "../assets/login.png";
import { Link } from "react-router-dom";
import userImage from "../assets/user.png";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      showError("Please fill all the fields");
      return;
    } else if (user.password.length < 6) {
      showError("Password must be atleast 6 characters long");
      return;
    } else if (!user.email.includes("@")) {
      showError("Please enter a valid email");
      return;
    } else {
      console.log(user);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setError("");
    }
  };
  return (
    <div className=" flex px-5 md:px-0 items-center max-w-4xl justify-center mx-auto relative mt-5">
      <img
        src={userImage}
        alt="profile"
        className="w-20 h-20 absolute top-0 right-0 -mt-4 -mr- md:-mt-10 md:-mr-10"
      />
      <div className=" text-gray-500 rounded-md shadow-2xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2  py-2 px-10 ">
            <img
              src={registerImage}
              alt="registerImage"
              className="mx-auto object-cover w-full h-full"
            />
          </div>
          <form
            onSubmit={formSubmitHandler}
            className="w-full md:w-1/2 py-2 px-5 md:px-10 bg-secondary"
          >
            <div className="text-center mb-5 mt-2">
              <h1 className="font-bold text-3xl text-white">REGISTER</h1>
            </div>
            {error && (
              <div className="bg-red-500 text-white text-xs py-2 px-2 mb-4 rounded-md ">
                {error}
              </div>
            )}
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1 text-white"
                  >
                    First name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500"
                      placeholder="John"
                      onChange={handleChange}
                      value={user.firstName}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-semibold px-1 text-white"
                  >
                    Last name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-500"
                      placeholder="Smith"
                      onChange={handleChange}
                      value={user.lastName}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
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
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg  outline-none focus:border-secondary"
                      placeholder="johnsmith@example.com"
                      onChange={handleChange}
                      value={user.email}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-8">
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
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-500"
                      placeholder="************"
                      onChange={handleChange}
                      value={user.password}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col -mx-3 items-center justify-center gap-5">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-heading text-white rounded-lg px-3 py-3 font-semibold hover:opacity-95"
                  >
                    REGISTER NOW
                  </button>
                </div>
                <p className="text-sm text-white mb-2">
                  Already have an account?&nbsp;
                  <Link
                    to="/login"
                    className="text-heading hover:opacity-90 transition duration-300"
                  >
                    Login
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

export default Register;
