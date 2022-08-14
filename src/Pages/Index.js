import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Transactions from "../Components/Transactions";

function Index() {
  return (
    <div className="Index">
        <Button variant="primary">
      Bank av $$<Badge bg="secondary">1000</Badge>
      <span className="visually-hidden">avail amt</span>
    </Button>
      <Transactions />
    </div>
  );
}

export default Index;