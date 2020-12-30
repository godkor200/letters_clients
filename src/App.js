import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Login from "./Component/Login";
import Index from "./Component/Index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/letter" component={Index} />
      </Router>
    </div>
  );
};

export default App;
