import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component{
  
    render(){
         return(
<div>
    <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"></a>
          </div>
      
          <div className="collapse navbar-collapse" id="navbar-collapse-3">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
              <li>
                <a className="btn btn-default btn-circle collapsed"  href="#" onClick={() => this.props.logout()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
         )
    }
}

export default Header;