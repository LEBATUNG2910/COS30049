import React from "react";
import styles from "../style"; 
    
const TransactionHistory = ({ transactionHistory }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className={styles.heading}>Transaction History</h2>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Time & Date</th>
            <th>Sender Address</th>
            <th>Receiver Address</th>
            <th>Amount (ETH)</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.time}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
