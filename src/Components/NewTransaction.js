import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { currencyFormat } from "../utilities.js";

const API = process.env.REACT_APP_API_URL

export default function NewTransaction() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    from: "",
    category: "",
    amount: 0,
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios.post(`${API}/transactions`, transaction)
      .then((response) => navigate(`/transactions`)) 
      .catch((error) => {console.error(error)})
  };

  const handleInputChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();

  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleInputChange}
          placeholder="date of transaction"
          required
        />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="name of item"
          required
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          onChange={handleInputChange}
          checked={transaction.from}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          onChange={handleInputChange}
          checked={transaction.category}
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          placeholder="Amount" 
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Create New Trans</button>
      </form>
      <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
    </div>
  );
}

