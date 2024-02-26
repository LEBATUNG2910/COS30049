import React, { useEffect, useState } from "react";
import styles from "../style";
import { ethers } from 'ethers';

const Balance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Connect to the Ethereum provider injected by MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer (account) from the provider
    const signer = provider.getSigner();

    // Get the address of the connected wallet account
    const getAddress = async () => {
      const address = await signer.getAddress();
      return address;
    };

    // Get the balance of the connected wallet account
    const getBalance = async () => {
      const address = await getAddress();
      const balance = await provider.getBalance(address);
      return balance;
    };

    // Update the balance state with the fetched balance
    getBalance().then((balance) => {
      setBalance(balance);
    });
  }, []);

  const formattedBalance = balance ? ethers.utils.formatEther(balance) : "0";

  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        <>
          <span className={styles.balanceBold}>Balance: </span>
          {formattedBalance}
        </>
      </p>
    </div>
  );
};

export default Balance;