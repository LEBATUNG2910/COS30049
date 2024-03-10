import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import LoginButton from "../components/Button/Loginbutton";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["user"]);

  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    // Empty input check
    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      setData({ email: "", password: "" });

      // Check if login was successful
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        // Set a cookie with the user's email
        setCookie("user", response.data.user.name, { path: "/" });

        // Show success message using toast
        toast.success(`Login successful! Welcome, ${response.data.user.name}!`);

        // Navigate to the token page
        navigate("/Token");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div>
      <div className="bg-black h-screen text-white p-4 text-center">
        <div className="text-4xl p-5 mt-20 text-white font-bold">Login</div>
        <div className="flex flex-row items-center justify-center mt-10">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/man.png"}
              alt="hello"
              className="h-15 w-15"
            />
          </div>
          <div className="p-5">
            <input
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="h-12 w-60 text-black text-2xl mr-10 rounded-md border-4 transition-all duration-300 ease-in-out hover:border-pink-500"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/lock.png"} alt="lock" />
          </div>
          <div className="p-5">
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="h-12 w-60 text-black text-2xl mr-10 rounded-md border-4 transition-all duration-300 ease-in-out hover:border-pink-500"
            />
          </div>
        </div>
        <div className="mt-5 text-4xl">
          <button onClick={LoginUser}>
            <LoginButton />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
