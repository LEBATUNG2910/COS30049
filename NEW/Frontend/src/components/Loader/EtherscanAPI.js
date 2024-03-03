






const API_KEY = "9MK8TYQWGNUAXXJHIVIK7X5C7VWH2M6JYY";
const ADDRESS = "0xEB1C9068Cffc78837A1f46C5D699eBdF916884F6";

// Replace with your chosen test network API endpoint
const TESTNET_API_URL = `https://api-sepolia.etherscan.io/api`;

export const fetchTransaction = async () => {
  try {
    const url = `${TESTNET_API_URL}?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "1") {
      const transactions = data.result;
      const latestTransaction = transactions[0]; // Assumes transactions are in descending order
      return latestTransaction;
    } else {
      console.error("Error fetching transactions:", data.message);
      throw new Error(data.message); // Rethrow for handling in component
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; // Rethrow for handling in component
  }
}; 

