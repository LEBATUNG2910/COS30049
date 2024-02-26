// CurrencyList.js

import React from "react";

const CurrencyList = ({ currencies }) => {
  return (
    <div>
      <h2>Currencies</h2>
      <ul>
        {currencies.map((currency) => (
          <li key={currency.id}>
            {currency.name} ({currency.symbol}) - ${currency.price}
            {/* Add Buy/Sell buttons and other functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
