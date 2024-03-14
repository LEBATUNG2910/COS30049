import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import Web3 from "web3";

function Dashboard() {
  const [cookies, , removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const location = useLocation();
  const [balance, setBalance] = useState("");

  const username = location.state ? location.state.username : cookies.user;

  const handleLogout = () => {
    // Remove the 'user' cookie
    removeCookie("user", { path: "/" });
    // Redirect to the login page
    navigate("/login");
  }; 
  //  Navigate to history page
  const showhistory = () => {
    navigate("/history");
  }; 
  const maketransact = () => {
    navigate("/token");
  };

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        const balance = await web3.eth.getBalance(address);
        setBalance(web3.utils.fromWei(balance, "ether"));
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-black h-screen text-white p-4 text-center">
      {username ? (
        <>
          <div className="text-4xl p-5 mt-20 text-white font-bold">
            Welcome {username}
          </div>
          <div className="text-2xl p-1 mt-10 text-white">
            Current Balance: {balance} ETH
          </div>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
              >
                Logout
              </button>
              <button
                onClick={showhistory}
                className="bg-green-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
              >
                Transaction history
              </button> 
              <button
                onClick={maketransact}
                className="bg-green-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
              >
                Make a transaction
              </button>
            </div>
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