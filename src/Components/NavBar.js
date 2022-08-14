import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Budgeting App</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/transactions">View All</Nav.Link>
    
      <Button variant="outline-info" href="#">
        <Link to="/transactions/new">New Transaction</Link>
      </Button>
    </Nav>
    <Button variant="primary">
      Bank av $$<Badge bg="secondary">1000</Badge>
      <span className="visually-hidden">avail amt</span>
    </Button>
    {/* <Navbar.Brand>$$ Available</Navbar.Brand> */}
    </Container>
    </Navbar>
  );
}