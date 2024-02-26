import { Link } from "react-router-dom";
const Example = () => {
  return (
    <>
      <div className=" flex flex-nowrap  gap-x-20 gap-y-5 grid-cols-3">
        <Link to="/Register">
          <DrawOutlineButton>Register</DrawOutlineButton>
        </Link>
      </div>
    </>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 border-4"
      style={{
        borderRadius: "4px", // Set the border-radius to make it rounded
        border: "2px solid", // Set the border color with RGB values
        borderColor: "gray",
      }}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-500 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-500 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-500 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
