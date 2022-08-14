import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log(API);


function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((response) => { setTransactions(response.data)})
        .catch((error) => { console.log(error)})
    }, [])
  return (
    <div className="Transactions">    
    <section>
    <table>
      <thead>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return <Transaction key={index} transaction={transaction} index={index} />;
        })}
      </tbody>
    </table>
  </section>
  </div>
  )
}

export default Transactions;