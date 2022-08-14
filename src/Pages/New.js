import React from "react";
import NewTransaction from "../Components/NewTransaction";

function New() {
  return (
    <div className="New">
      <h2>Add a new item</h2>
      <NewTransaction />
    </div>
  );
}

export default New;