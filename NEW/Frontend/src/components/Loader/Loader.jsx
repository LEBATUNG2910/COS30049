import React from "react";
import styles from "../style";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        src={process.env.PUBLIC_URL + "images/ethereumLogo.png"}
        alt="etherlogo"
        className={styles.loaderImg}
      />
      <p className={styles.loaderText}>Please connect your wallet</p>
    </div>
  );
};

export default Loader;
