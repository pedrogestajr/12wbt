import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./components/NavMenu";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <NavMenu />
    </Router>
  );
}

export default App;
