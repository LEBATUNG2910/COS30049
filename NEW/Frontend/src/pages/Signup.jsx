import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className=" overflow-hidden flex md:items-start  min-h-screen text-white md:flex-row flex-col pb-12  ">
      <div className=" md:items-start md:p-2 md:ml-40 md:justify-center md:max-w-lg md:text-justify md:mt-40 items-center">
        <h1 className="md:mt-4 md:text-center md:text-6xl text-4xl text-center mt-6">
          <strong>Welcome to Bitwalls! </strong>
        </h1>
        {/* Sign Up Button*/}
        <div className="flex flex-col items-center justify-center md:mt-0">
          <Link to="./Register ">
            <button className="bg-[#FCD535] hover:bg-[#d8b734] text-black text-base py-2 rounded md:mt-10 mt-5 pr-5 pl-3 flex items-center">
              <img
                src="./images/user.png"
                alt="user"
                className="mr-14 w-5 h-5 flex-shrink-0"
              />
              <strong className="text-center mr-9 font-sans font-extrabold">
                Sign up with Email account
              </strong>
            </button>
          </Link>
        </div>
        {/* Or part*/}
        <div className="flex items-center md:mt-10 mt-5">
          <div className="border-t border-gray-500 flex-grow"></div>
          <div className="mx-4 text-gray-500 text-xl">or</div>
          <div className="border-t border-gray-500 flex-grow"></div>
        </div>
        {/* Continue with GG Button*/}
        <div className="flex flex-col items-center justify-center ">
          {/* Already have account....*/}
          <p className="text-white md:mt-10 md:text-2xl text-lg items-center mt-10 ">
            Already have an account?{" "}
            <Link to="./Login ">
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-700">
                Log In
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-col md:items-center md:justify-center md:mt-0 mt-18">
        <img
          src="./images/pic.png"
          alt="user"
          className="mt-28 w-9/12 ml-14 h-auto flex-shrink-0"
        />
        <div className="md:text-center mt-12 md:text-xl text-lg font-sans md:w-9/12 text-center ">
          <p>
            Unlock{" "}
            <strong className="text-yellow-500 md:text-2xl text-xl">50%</strong>{" "}
            Welcome Bonus savings! Join today for a limited-time offer. Don't
            miss out – sign up now for elevated benefits!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
