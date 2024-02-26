import React, { useState, useEffect } from "react";
import { AmountIn, AmountOut, Balance } from "./";
import styles from "../style";

const Exchange = ({ pools }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [metamaskBalance, setMetamaskBalance] = useState(0);

  const handleSwapClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    // Function to fetch the balance from MetaMask
    const fetchMetamaskBalance = async () => {
      // Check if MetaMask is installed and available
      if (window.ethereum) {
        try {
          // Request access to the user's accounts
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Get the selected account address
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          const account = accounts[0];

          // Get the account balance
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [account, "latest"],
          });

          // Update the balance state
          setMetamaskBalance(parseInt(balance));
        } catch (error) {
          console.error("Error fetching MetaMask balance:", error);
        }
      }
    };

    fetchMetamaskBalance();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="mb-8">
        <AmountIn />
        <Balance balance={metamaskBalance} />
      </div>
      <div className="mb-8 w-[100%]">
        <AmountOut />
        <Balance balance={metamaskBalance} />
      </div>
      <button
        onClick={handleSwapClick}
        className={`border-none outline-none px-6 py-2 font-poppins font-bold text-lg leading-[24px] transition-all min-h-[56px] rounded-full ${
          isClicked ? "bg-pink-600" : "bg-pink-400 hover:bg-pink-500"
        }`}
      >
        SWAP
      </button>
    </div>
  );
};

export default Exchange;