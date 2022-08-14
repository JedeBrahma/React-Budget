import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar.js";
// pages
import Edit from "./Pages/Edit.js";
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
