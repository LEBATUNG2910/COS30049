import React, { useContext } from "react";
import Web3 from "web3";
import { Web3Context } from "../../pages/Web3Context";

const MetaMaskConnectButton = () => {
  const { account, setAccount } = useContext(Web3Context);

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          // Accounts already connected
          setAccount(accounts[0]);
        } else {
          // Prompt for account connection
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          const updatedAccounts = await web3.eth.getAccounts();

          // Update the account state
          setAccount(updatedAccounts[0]);

          // Store the connected account in local storage
          localStorage.setItem("connectedAccount", updatedAccounts[0]);
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  const logoutFromMetaMask = async () => {
    // Clear the stored account from local storage
    localStorage.removeItem("connectedAccount");

    // Update the account state to an empty string
    setAccount("");

    // Reconnect MetaMask account
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("Error reconnecting to MetaMask:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto  ">
      <button
        onClick={connectToMetaMask}
        className="bg-pink-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-xl "
      >
        Connect to MetaMask
      </button>

      {account && <p>Connected Account: {account}</p>}
      <img
        src={process.env.PUBLIC_URL + "/images/gogogogo.png"}
        alt="logogogo"
        className="w-56 h-56 object-contain animate-spin"
      />
    </div>
  );
};

export default MetaMaskConnectButton;
