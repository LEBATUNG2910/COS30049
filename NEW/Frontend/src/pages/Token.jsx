import React, { useState, useContext } from "react";
import styles from "../components/style";
import MetaMaskConnectButton from "../components/Button/WalletConnect";
import TransferEther from "../components/Loader/TransferEther";// Import the new component
import { Web3Context } from "../pages/Web3Context";
import { Balance } from "../components/Loader";
const Token = () => {
  const { account } = useContext(Web3Context);

  return (
    <div className="bg-black h-screen">
      <div className={styles.exchangeContainer}>
        <h1 className={styles.headTitle}>BITWALLS COMPANY</h1>
        <div className={styles.exchangeBoxWrapper}>
          <div className={styles.exchangeBox}>
            {!account && (
              <div className={styles.exchange}>
                <MetaMaskConnectButton />
              </div>
            )}
            {account && (
              <div className={styles.exchange}>
                <TransferEther /> {/* Render the new component */}
                <p>Connected Account: {account}</p>  
                <Balance /> {/* Display the balance component */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
