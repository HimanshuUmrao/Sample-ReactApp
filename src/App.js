import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>         
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />          
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
