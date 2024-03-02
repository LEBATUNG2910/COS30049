import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className=" overflow-hidden flex xl:items-start justify-center h-screen text-white xl:flex-row flex-col pb-12  ">
      <div className=" xl:items-start md:p-2  xl:justify-center xl:text-justify lg:pt-48 lg:items-center xl:w-1/2 ">
        <h1 className="md:mt-4 text-center lg:text-6xl md:text-5xl text-4xl lg:text-center ">
          <strong>Welcome to Bitwalls! </strong>
        </h1>
        {/* Sign Up Button*/}
        <div className="flex flex-col items-center justify-center pt-4 ">
          <Link to="./Register ">
            <button className="bg-[#FCD535] hover:bg-[#d8b734] text-black text-base md:text-lg py-2 px-2 rounded md:mt-10 w-full  flex items-center">
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
        <div className="flex items-center md:mt-10 mt-5 xl:w-10/12 xl:pl-20 justify-center">
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
      <div className="lg:flex lg:flex-col items-center justify-center md:mt-0 ">
        <img
          src="./images/pic.png"
          alt="user"
          className="lg:pt-24 lg:w-9/12  flex-shrink-0 items-center justify-center "
        />
        <div className="md:text-center mt-12 md:text-xl text-lg font-sans xl:w-9/12 text-center ">
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
