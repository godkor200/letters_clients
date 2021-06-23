import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import LetterEntry from './component/LetterEntry';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Letter" component={LetterEntry} />
      </Router>
    </div>
  );
};

export default App;
