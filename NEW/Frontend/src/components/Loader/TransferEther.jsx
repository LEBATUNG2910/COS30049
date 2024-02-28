// TransferEther.js
import React, { useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import styles from "../style";

const TransferEther = ({ updateTransactionHistory }) => {
  const [senderAddress, setSenderAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [error, setError] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonColor, setButtonColor] = useState("black");

  const handleMouseEnter = () => {
    setButtonColor("red");
  };

  const handleMouseLeave = () => {
    setButtonColor("black");
  };

  const handleTransfer = async () => {
    try {
      setError("");
      setTransactionSuccess(false);
      setLoading(true);

      //   if (!senderAddress || !amount || !receiverAddress) {
      //     setError("Please fill all fields");
      //     setLoading(false);
      //     return;
      //   }
      if (!senderAddress) {
        setError("Please fill your contract address");
        setLoading(false);
        return;
      }
      if (!receiverAddress) {
        setError("Please fill the receiver contract address");
        setLoading(false);
        return;
      }
      if (!amount) {
        setError("Please fill the ETH numbers");
        setLoading(false);
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const amountInWei = ethers.utils.parseEther(amount);

      const transaction = await signer.sendTransaction({
        to: receiverAddress,
        value: amountInWei,
      });

      await transaction.wait();

      setTransactionHash(transaction.hash);
      setTransactionSuccess(true);
      setLoading(false);

      const newTransaction = {
        time: new Date().toLocaleString(),
        sender: senderAddress,
        receiver: receiverAddress,
        amount: ethers.utils.formatEther(amountInWei),
      };
      updateTransactionHistory(newTransaction);
      console.log("Transaction sent successfully!");
    } catch (error) {
      setError("Error sending transaction");
      setLoading(false);
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center  ">
      {loading && <p>Loading...</p>}
      {!transactionSuccess && !loading && (
        <>
          <p className=" text-3xl font-mono">ETH Transaction </p>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Sender's Address"
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
            className="mt-5 rounded-lg border-4 text-xl p-1"
          />
          <input
            type="number"
            placeholder="Amount to Send (ETH)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-5 rounded-lg border-4 text-xl p-1"
          />
          <input
            type="text"
            placeholder="Receiver's Address"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            className="mt-5 rounded-lg border-4 text-xl p-1"
          />
          <button
            onClick={handleTransfer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: buttonColor }}
            className="mt-5 text-xl font-bold font-mono "
          >
            Transfer Ether
          </button>
        </>
      )}
      {transactionSuccess && (
        <div>
          <p className={styles.success}>
            Transaction sent successfully! <br />
            Transaction Hash: {transactionHash}
          </p>
          <Link to="/history">
            <button className={styles.button}>Show History Transactions</button>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className={styles.button}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default TransferEther;
