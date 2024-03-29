import React, { useContext } from "react";
import styles from "../components/style";
import MetaMaskConnectButton from "../components/Button/WalletConnect";
import TransferEther from "../components/Loader/TransferEther"; // Import the new component
import { Web3Context } from "../pages/Web3Context";
const Token = () => {
  const { account } = useContext(Web3Context);

  return (
    <div className="bg-black h-screen">
      <div className={styles.exchangeContainer}>
        <h1 className="text-white font-poppins font-black md:text-5xl text-3xl tracking-wide mb-10">
          BITWALLS COMPANY
        </h1>
        <div className={styles.exchangeBoxWrapper}>
          <div className={styles.exchangeBox}>
            {!account && (
              <div className={styles.exchange}>
                <MetaMaskConnectButton />
              </div>
            )}
            {account && (
              <div className="mt-5 flex flex-col items-center justify-center">
                {/* Render the new component */}
                <TransferEther />
                <div className="mt-5 "></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
// q
