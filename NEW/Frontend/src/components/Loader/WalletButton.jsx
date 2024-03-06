import React, { useState } from "react";
import styles from "../style";

const WalletButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return ( 
    <div>
      <button onClick={handleButtonClick} className={styles.walletButton}>
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletButton;
