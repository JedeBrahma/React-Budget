import React from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../utilities.js";
import ListGroup from "react-bootstrap/ListGroup";
// import { format } from "date-fns"

function Transaction({ transaction, index }) {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>Date: {transaction.date}</ListGroup.Item>

      <ListGroup.Item>Name:{"  "}
        <Link to={`/transactions/${index}`}> {transaction.name}</Link>
      </ListGroup.Item>

      <ListGroup.Item>Amount: {currencyFormat.format(transaction.amount)}
      </ListGroup.Item>


    </ListGroup>
  );
}

export default Transaction;
