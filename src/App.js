import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Login from "./component/Login";
import LetterEntry from "./component/LetterEntry";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/letter" component={LetterEntry} />
      </Router>
    </div>
  );
};

export default App;
