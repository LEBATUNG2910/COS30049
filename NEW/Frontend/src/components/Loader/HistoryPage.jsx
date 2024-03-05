import React, { useState, useEffect } from "react";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });

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
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const renderTransactions = () => {
    if (error) {
      return <p>Error: {error}</p>;
    } else if (transactions.length === 0) {
      return <p>No transactions found.</p>;
    } else {
      return (
        <div className="bg-black w-full h-full overflow-hidden">
          <p className="text-white flex  justify-center mb-10 xl:text-5xl text-3xl font-mono text-center">
            Transaction History
          </p>
          <input
            type="text"
            placeholder="Search previous transaction"
            value={search}
            onChange={handleSearchChange}
            className="block mx-auto mb-10 px-4 py-2 border bg-black border-gray-300 text-white w-[30%] rounded-xl"
          />
          {transactions.map((transaction, index) => (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 bg-gray-800 border-violet-500 p-4  lg:mx-96 md:mx-52 font-mono mt-10 ">
              <p className="text-red-500 text-xs md:text-sm text-center break-all  ">
                Hash:
                {transaction.hash}
              </p>
              <p className="text-emerald-500 text-xs md:text-sm mt-1 break-all">
                From: {transaction.from}
              </p>
              <p className="text-blue-400 text-xs md:text-sm mt-1 break-all">
                To: {transaction.to}
              </p>
              <p className="text-white text-xs md:text-sm mt-1 break-all">
                Value: {Number(transaction.value) / 10 ** 18} ETH
              </p>
              <p className="text-white text-xs md:text-sm mt-1 break-all">
                Timestamp:{" "}
                {new Date(transaction.timeStamp * 1000).toLocaleString()}
              </p>
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
