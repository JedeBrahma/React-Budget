import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ShowTransaction() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.log(error));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };
  return (
    <article>
      <div className="show-details">
        <span>
          <h6>Date: {transaction.date}</h6></span>
        <span>
          <h5>Transaction: {transaction.name}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></span>
        <span>
          <h6>Category: {transaction.category}</h6></span>
        <span>
          <h5>From: {transaction.from}</h5></span>
          <span>
          <h5>Amount: {transaction.amount}</h5></span>
      </div>
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
        <Link to={`/transactions`}>
          <button onClick={handleDelete}>Delete</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ShowTransaction;
