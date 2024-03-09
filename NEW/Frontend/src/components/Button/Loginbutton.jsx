import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="w-full h-40 flex items-center justify-center cursor-pointer">
      <Link to="/Login">
        <button class="bg-white hover:bg-red-500 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110  active:animate-bounce">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;
