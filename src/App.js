import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Component/login";
import LetterEntry from "./Component/LetterEntry";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/letters_clients" component={Login} />
        <Route exact path="/Letter" component={LetterEntry} />
      </Router>
    </div>
  );
};

export default App;
