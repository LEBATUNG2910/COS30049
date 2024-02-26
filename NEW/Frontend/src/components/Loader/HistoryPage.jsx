import { useEffect, useState } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactionHistory() {
      try {
        const address = "0xYOUR_ADDRESS"; // Replace with the actual Ethereum address

        const response = await axios.get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=YOUR_API_KEY`
        );

        if (response.data.status === "1") {
          setTransactions(response.data.result);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching transaction history:", error);
        setError("Failed to fetch transaction history");
      }
    }

    fetchTransactionHistory();
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Transaction History</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>
              <p>Transaction Hash: {tx.hash}</p>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <p>Value: {tx.value} wei</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPage;