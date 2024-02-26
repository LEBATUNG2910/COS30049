import React, { useState, useEffect } from "react";
import styles from "../style";

const AmountIn = () => {
  const [showList, setShowList] = useState(false);
  const [selectedToken, setSelectedToken] = useState(""); // State cho token được chọn
  const [inputValue, setInputValue] = useState(""); // State cho giá trị nhập vào ô input

  useEffect(() => {
    // Đóng danh sách khi một token được chọn
    if (selectedToken) {
      setShowList(false);
    }
  }, [selectedToken]);

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        value={inputValue} // Liên kết giá trị của ô input với state
        onChange={(e) => setInputValue(e.target.value)} // Cập nhật giá trị state khi ô input thay đổi
        className={styles.amountInput}
      />
      <div
        className="relative"
        onClick={() => setShowList((prevState) => !prevState)}
      >
        <button className={styles.currencyButton}>
          {selectedToken || "Select"}{" "}
          <img
            src="./images/chevron-down.svg"
            alt="chevrondown"
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {showList && (
          <ul className={styles.currencyList}>
            {[
              { token: "BTC", tokenName: "BTC" },
              { token: "TRX", tokenName: "TRX" },
              { token: "BNB", tokenName: "BNB" },
              { token: "ETH", tokenName: "ETH" },
            ].map(({ token, tokenName }, index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  selectedToken === token ? "bg-site-dim2" : ""
                } cursor-pointer`}
                onClick={() => {
                  setSelectedToken(token); // Cập nhật state khi một token được chọn
                  setInputValue(""); // Đặt giá trị của ô input về trạng thái mặc định
                }}
              >
                {tokenName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountIn;
