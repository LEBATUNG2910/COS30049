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

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return navigate("/login");
    }

    try {
      const response = await axios.post("/login", { email, password });

      if (response.data.error) {
        if (response.data.error.includes("password")) {
          toast.error("Incorrect password. Please try again.");
        } else {
          toast.error(response.data.error);
        }
      } else {
        setData({ email: "", password: "" });

        // Set a cookie with the user's email
        setCookie("user", response.data.name, { path: "/" });

        // Show success message using toast
        toast.success(`Login successful! Welcome, ${response.data.name}!`);

        // Navigate to the token page
        navigate("/Token");
      }
    } catch (error) {
      toast.error("Incorrect Password. Please try again.");
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