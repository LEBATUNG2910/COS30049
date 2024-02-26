import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

function Dashboard() {
  const [cookies, , removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state ? location.state.username : cookies.user;

  const handleLogout = () => {
    // Remove the 'user' cookie
    removeCookie("user", { path: "/" });
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="bg-black h-screen text-white p-4 text-center">
      {username ? (
        <>
          <div className="text-4xl p-5 mt-20 text-white font-bold">
            Welcome {username}
          </div>
          <button
            onClick={handleLogout}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="text-4xl p-5 mt-20 text-white font-bold">
            Login Now
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
