// HistoryPage.js
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import Web3 from "web3";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [balance, setBalance] = useState(0);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const navigate = useNavigate();

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
              const balanceResponse = await window.ethereum.request({
                method: "eth_getBalance",
                params: [ADDRESS, "latest"],
              });
              const web3 = new Web3(window.ethereum);
              const etherValue = parseFloat(
                web3.utils.fromWei(balanceResponse, "ether")
              );
              setBalance(etherValue);
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
  const connectmetamask = () => {
    navigate("/token");
  };

  useEffect(() => {
    const fetchTransactionBlockInfo = async (transactionHash) => {
      try {
        const web3 = new Web3(window.ethereum);
        const transaction = await web3.eth.getTransaction(transactionHash);
        const blockNumber = transaction.blockNumber;
        const block = await web3.eth.getBlock(blockNumber);

        return block;
      } catch (error) {
        throw new Error(
          `Failed to fetch block info for transaction ${transactionHash}: ${error.message}`
        );
      }
    };

    const fetchAdditionalInfo = async () => {
      const web3 = new Web3(window.ethereum);
      const updatedTransactions = [];

      for (const transaction of transactions) {
        const tx = await web3.eth.getTransaction(transaction.hash);
        const block = await fetchTransactionBlockInfo(transaction.hash);
        updatedTransactions.push({
          ...transaction,
          additionalInfo: tx,
          blockInfo: block,
        });
      }

      setAdditionalInfo(updatedTransactions);
    };

    fetchAdditionalInfo();
  }, [transactions]);

  useEffect(() => {
    const filtered = transactions.filter((transaction) =>
      transaction.hash.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [search, transactions]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const renderTransactions = () => {
    if (error) {
      return <p>Error: {error}</p>;
    } else {
      return (
        <div className="bg-black w-full home-bg h-full ">
          <p className="text-white flex justify-center mb-10 xl:text-5xl text-3xl font-mono text-center">
            Transaction History
          </p>
          <p className="text-white flex justify-center mb-5 xl:text-2xl text-xl font-mono text-center">
            Wallet Balance: {balance} ETH
          </p>
          <input
            type="text"
            placeholder="Search previous transaction"
            value={search}
            onChange={handleSearchChange}
            className="block mx-auto mb-10 px-4 py-2 border bg-black border-gray-300 text-white w-[30%] rounded-xl"
          />
          <p className="text-white flex items-center justify-center font-mono">
            Please wait about 20s before seeing the result
          </p>
          {filteredTransactions.length === 0 ? (
            <div className="flex justify-center flex-col items-center max-w-sm mx-auto">
            <p className="text-red-700 text-center">Please connect to your wallet to see transaction history</p> 
            
            <button
              onClick={connectmetamask}
              className="bg-green-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            >
              Connect your wallet
            </button>
          </div>
          ) : (
            filteredTransactions.map((transaction, index) => ( 
              
              <div
                key={transaction.hash}
                className="flex flex-col items-center justify-center rounded-lg border-2 bg-gray-800 border-violet-500 p-4  lg:mx-96 md:mx-52 font-mono mt-10 "
              >
                <p className="text-red-500 text-xs md:text-sm text-center break-all">
                  Hash: {transaction.hash}
                </p>
                <p className="text-emerald-500 text-xs md:text-sm mt-1 break-all">
                  From: {transaction.from}
                </p>
                <p className="text-blue-400 text-xs md:text-sm mt-1 break-all">
                  To: {transaction.to}
                </p>
                <p className="text-white text-xs md:text-sm mt-1 break-all">
                  Value: {Web3.utils.fromWei(transaction.value, "ether")} ETH
                </p>
                <p className="text-white text-xs md:text-sm mt-1 break-all">
                  Timestamp:{" "}
                  {new Date(transaction.timeStamp * 1000).toLocaleString()}
                </p>
                {additionalInfo[index] && (
                  <div>
                    <p className="text-white text-xs md:text-sm mt-1 break-all">
                      Gas Price: {additionalInfo[index].gasPrice}
                    </p>
                    <p className="text-white text-xs md:text-sm mt-1 break-all">
                      Gas Used: {additionalInfo[index].gasUsed}
                    </p>
                    {additionalInfo[index].blockInfo && (
                      <p className="text-white text-xs md:text-sm mt-1 break-all">
                        Block Number: {additionalInfo[index].blockNumber}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      );
    }
  };

  return <div>{renderTransactions()}</div>;
};

export default HistoryPage;
