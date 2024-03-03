import React, { useState, useEffect } from "react";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });

          if (accounts.length > 0) {
            const ADDRESS = accounts[0];
            const API_KEY = "9MK8TYQWGNUAXXJHIVIK7X5C7VWH2M6JYY";
            const TESTNET_API_URL = `https://api-sepolia.etherscan.io/api`;

            const url = `${TESTNET_API_URL}?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === "1") {
              setTransactions(data.result);
            } else {
              throw new Error(data.message);
            }
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTransactions();
  }, []);

  const renderTransactions = () => {
    if (error) {
      return <p>Error: {error}</p>;
    } else if (transactions.length === 0) {
      return <p>No transactions found.</p>;
    } else {
      return (
        <div>
          {transactions.map((transaction, index) => (
            <div key={index}>
              <p className="text-blue-500">Hash: {transaction.hash}</p>
              <p className="text-red-500">From: {transaction.from}</p>
              <p className="text-red-500">To: {transaction.to}</p>
              <p className="text-red-500">Value: {Number(transaction.value) / 10 ** 18} ETH</p>
              <p className="text-red-500">Timestamp: {new Date(transaction.timeStamp * 1000).toLocaleString()}</p>
              <hr />
            </div>
          ))}
        </div>
      );
    }
  };

  return <div>{renderTransactions()}</div>;
};

export default HistoryPage;