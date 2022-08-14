import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { currencyFormat } from "../utilities.js";

const API = process.env.REACT_APP_API_URL

export default function EditTransaction() {
    let { index } = useParams();
    const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    
  });
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.error(error));
  }, []);

  const updateTransaction = () => {
    axios
    .put(`${API}/transactions/${index}`, transaction)
    .then((response) => {
      setTransaction(response.data);
      navigate(`/transactions/${index}`);
    })
    .catch((error) => console.error(error));
  };

  const handleInputChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();

  };
  return (
    <div className="Edit">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Date:</label>
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
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={currencyFormat.format(transaction.amount)}
          placeholder="0.00" // get currencyinput add on
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
       
        <button type="submit" >Update this Item</button>
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

