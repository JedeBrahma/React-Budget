import React from "react";
import { Link } from "react-router-dom";
// import { currencyFormat } from "../utilities.js";
import ListGroup from "react-bootstrap/ListGroup";


function Transaction({ transaction, index }) {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>Date: {transaction.date}</ListGroup.Item>

      <ListGroup.Item>Name:
        <Link to={`/transactions/${index}`}> {transaction.name}</Link>
      </ListGroup.Item>

      <ListGroup.Item>Amount: {transaction.amount > 0 
          ? <span className="add">${transaction.amount.toFixed(2)}</span>
          : <span className="subtract">${transaction.amount.toFixed(2)}</span>  }
      </ListGroup.Item>


    </ListGroup>
  );
}

export default Transaction;
