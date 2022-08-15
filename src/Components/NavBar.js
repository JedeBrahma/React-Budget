import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const API = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, [transactions]);

  const amountAvailable = transactions
    .map((transactions) => transactions.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Budgeting App</Navbar.Brand>
        <Button variant="outline-info" href="#">
            <Link to="/transactions">View All</Link>
          </Button>
        <Button variant="outline-info" href="#">
            <Link to="/transactions/new">New Transaction</Link>
          </Button>
   
        <Button variant="primary">
          Bank av $$: <Badge bg="secondary">{ amountAvailable > 0 
          ? <span className="adding">${amountAvailable.toFixed(2)}</span>
          : <span className="subtracting">${amountAvailable.toFixed(2)}</span>  }</Badge>
          <span className="visually-hidden">avail amt</span>
        </Button>
        {/* <Navbar.Brand>$$ Available</Navbar.Brand> */}
      </Container>
    </Navbar>
  );
}
