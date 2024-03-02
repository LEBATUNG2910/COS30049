import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black p-4 opacity-100 ">
      <div className="container mx-auto flex justify-between items-center xl:flex-row flex-col ">
        {/* Brand/Logo */}
        <div className="flex flex-start text-3xl text-white ">
          <Link to="./Home">
            <img
              src={process.env.PUBLIC_URL + "/images/crypto.png"}
              alt="blockchain"
              className="sm:h-14 sm:w-14 lg:h-20 lg:w-20 w-12 h-12"
            />
          </Link>
          <Link to="./Home">
            <h1 className="ml-3 lg:text-2xl text-lg lg:mt-2">
              <strong>
                BIT
                <br />
                WALLS
              </strong>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="md:flex sm:space-x-4 text-2xl mt-2 md:mt-0 ">
          {/* Dashboard Link */}
          <Link
            to="./Dashboard"
            className="text-white sm:text-2xl text-lg hover:text-pink-600 p-2 "
          >
            <strong>Profile</strong>
          </Link>

          {/* Home Link */}
          <Link
            to="./Home"
            className="text-white sm:text-2xl text-lg hover:text-pink-600 p-2"
          >
            <strong>Home</strong>
          </Link>

          {/* Signup Link */}
          <Link
            to="./Signup"
            className="text-white sm:text-2xl text-lg hover:text-pink-600 p-2"
          >
            <strong>Sign Up</strong>
          </Link>

          {/* Log In Link */}
          <Link
            to="./Login"
            className="text-white sm:text-2xl text-lg hover:text-pink-600 p-2"
          >
            <strong>Log In</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
