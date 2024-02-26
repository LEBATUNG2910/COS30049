import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-black p-4 opacity-100">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex flex-start text-3xl text-white">
          <Link to="./Home">
            <img
              src={process.env.PUBLIC_URL + "/images/crypto.png"}
              alt="blockchain"
              className="h-14 w-14 md:h-20 md:w-20"
            />
          </Link>
          <Link to="./Home">
            <h1 className="ml-3 md:text-2xl text-lg mt-2">
              <strong>
                BIT
                <br />
                WALLS
              </strong>
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleDropdown}>
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } md:flex md:space-x-4 text-2xl mt-2 md:mt-0`}
        >
          {/* Dashboard Link */}
          <Link
            to="./Dashboard"
            className="text-white md:text-2xl text-base hover:text-pink-600 p-2"
          >
            <strong>Profile</strong>
          </Link>

          {/* Home Link */}
          <Link
            to="./Home"
            className="text-white md:text-2xl text-base hover:text-pink-600 p-2"
          >
            <strong>Home</strong>
          </Link>

          {/* Signup Link */}
          <Link
            to="./Signup"
            className="text-white md:text-2xl text-base hover:text-pink-600 p-2"
          >
            <strong>Sign Up</strong>
          </Link>

          {/* Log In Link */}
          <Link
            to="./Login"
            className="text-white md:text-2xl text-lg hover:text-pink-600 p-2"
          >
            <strong>Log In</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
