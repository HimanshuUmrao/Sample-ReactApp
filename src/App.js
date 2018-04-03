import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/login';
import SignUp from './components/SignUp';
import dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token') ? <Redirect to='./dashboard' /> : <Component {...props} />
  )} />
)

class App extends Component {
  
  // state = {
  //   loading: true
  // };

  // componentDidMount() {
  //   setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  // }
  
  render() {
    // const { loading } = this.state;
    
    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }
    return (
      <div>
        
      <Router>
        <div className="App">
        
        <Switch>         
          <LoginRoute exact path="/" component={Login} />
          <LoginRoute path="/SignUp" component={SignUp} /> 
          <PrivateRoute path="/dashboard" component={dashboard} />         
        </Switch>

        </div>
        
      </Router>
      </div>
    );
  }
}

export default App;
