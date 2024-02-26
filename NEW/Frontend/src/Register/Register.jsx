import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const [hoveredState, setHoveredState] = useState({
    name: false,
    email: false,
    password: false,
    retypePassword: false,
  });

  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setData((prevData) => ({ ...prevData, email: emailParam }));
    }
  }, [location.search]);

  const handleMouseEnter = (field) => {
    setHoveredState((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleMouseLeave = (field) => {
    setHoveredState((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleMouseClick = (field) => {
    if (
      (field === "name" && usernameExists) ||
      (field === "email" && emailExists)
    ) {
      setUsernameExists(false);
      setEmailExists(false);
    }
  };

  const RegisterUser = async (e) => {
    e.preventDefault();

    const { name, email, password, retypePassword } = data;

    if (!email) {
      toast.error("Please enter your Email");
      return;
    }
    if (!name) {
      toast.error("Please enter your Username");
      return;
    }
    if (!password) {
      toast.error("Please enter your Password");
      return;
    }

    if (password !== retypePassword) {
      toast.error("Passwords do not match");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Passwords should contain at least 1 digit, 1 uppercase letter, and be at least 6 characters long"
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
      });

      if (response.data.error) {
        if (response.data.error.includes("Email")) {
          toast.error("Email is already taken");
          setEmailExists(true);
        } else {  
          // Handle other errors
          toast.error(response.data.error);
        }
      } else {
        // Registration successful
        setCookie("user", name, { path: "/" });
        toast.success(`Registration Successful. Welcome, ${name}!`);
        setData({ name: "", email: "", password: "", retypePassword: "" });
        navigate("/Dashboard", { state: { username: name } });
      }
    } catch (error) {
      toast.error("Username or Email already taken ");
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-[#000000] text-2xl text-white">
          <div className="container p-2 text-center max-w-xl ">
            <h1 className="mt-0 md:text-5xl text-3xl">
              <strong>Create personal account </strong>
            </h1>
            <div className="flex md:justify-normal justify-center">
              <div className="md:items-start md:p-2 md:ml-28 max-w-xs">
                <div className="flex flex-col items-start pt-7">
                  <label
                    htmlFor="inputname"
                    className="block text-white-800 font-semibold text-sm mb-2 text-center"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className={`border-2 p-1.5 px-10 mt-0 rounded w-full bg-black text-white transition ${
                      hoveredState.name
                        ? "md:border-pink-500 border-pink-500 shadow-md"
                        : "border-slate-600"
                    }`}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    onMouseEnter={() => handleMouseEnter("name")}
                    onMouseLeave={() => handleMouseLeave("name")}
                    onClick={() => handleMouseClick("name")}
                  />
                  {usernameExists && (
                    <label
                      htmlFor="inputnamecondition"
                      className="block text-slate-400 font-semibold text-sm mb-2 mt-2"
                    >
                      Username already exists. Please choose a different
                      username.
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="flex md:justify-normal justify-center">
              <div className="md:items-start md:p-2 md:ml-28 max-w-xs">
                <div className="flex flex-col items-start pt-7">
                  <label
                    htmlFor="inputname"
                    className="block text-white-800 font-semibold text-sm mb-2 text-center"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className={`border-2 p-1.5 px-10 mt-0 rounded w-full bg-black text-white transition ${
                      hoveredState.email
                        ? "md:border-pink-500 border-pink-500 shadow-md"
                        : "border-slate-600"
                    }`}
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    onMouseEnter={() => handleMouseEnter("email")}
                    onMouseLeave={() => handleMouseLeave("email")}
                    onClick={() => handleMouseClick("email")}
                  />
                  {emailExists && (
                    <label
                      htmlFor="emailcondition"
                      className="block text-slate-400 font-semibold text-sm mb-2 mt-2 text-center"
                    >
                      Email already exists. Please use a different email.
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="flex md:justify-normal justify-center">
              <div className="md:items-start md:p-2 md:ml-28 max-w-xs">
                <div className="flex flex-col items-start pt-7">
                  <label
                    htmlFor="inputname"
                    className="block text-white-800 font-semibold text-sm mb-2 text-center"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`border-2 p-1.5 px-10 mt-0 rounded w-full bg-black text-white transition ${
                      hoveredState.password
                        ? "md:border-pink-500 border-pink-500 shadow-md"
                        : "border-slate-600"
                    }`}
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    onMouseEnter={() => handleMouseEnter("password")}
                    onMouseLeave={() => handleMouseLeave("password")}
                  />
                </div>
              </div>
            </div>

            <div className="flex md:justify-normal justify-center">
              <div className="md:items-start md:p-2 md:ml-28 max-w-xs">
                <div className="flex flex-col items-start pt-7">
                  <label
                    htmlFor="inputname"
                    className="block text-white-800 font-semibold text-sm mb-2 text-center"
                  >
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    className={`border-2 p-1.5 px-10 mt-0 rounded w-full bg-black text-white transition ${
                      hoveredState.retypePassword
                        ? "md:border-pink-500 border-pink-500 shadow-md"
                        : "border-slate-600"
                    }`}
                    value={data.retypePassword}
                    onChange={(e) => setData({ ...data, retypePassword: e.target.value })}
                    onMouseEnter={() => handleMouseEnter("retypePassword")}
                    onMouseLeave={() => handleMouseLeave("retypePassword")}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 ">
              <button
                onClick={RegisterUser}
                className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-pink-700 group px-12 py-2"
              >
                <span className="relative z-10 text-slate-300 group-hover:text-slate-300 text-xl duration-500">
                  Sign Up !
                </span>
                <span className="absolute w-full h-full bg-pink-700 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-pink-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </button>

              <p className="text-white mt-10 items-center ">
                Already have an account?{" "}
                <Link to="/Login">
                  <span className="text-pink-300 cursor-pointer hover:text-pink-700">
                    Log In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
