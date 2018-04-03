import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './login.css'
import Joi from 'joi-browser';
import axios from 'axios';
import validator from 'validator';


class Login extends React.Component{
    state = {
        username: "",
        password: "",
        errors: {
          username: '',
          password: ''
        }
      }
      onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        let input = {
          username: username,
          password: password
        }
        axios.post(`http://localhost:3000/login`,
          {
            authKey: username,
            password: password,
          })
          .then(res => {
            const data = res.data;
            console.log(data)
            this.setState({ data });
            localStorage.setItem('token', data.token)
            this.props.history.push("/");
          })
      }

      
      handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
          [name]: value
        })
      }
      
    render() {
        const {username, password} = this.state;
        return(
            <div>
                <div className="container">    
                    <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info" >
                            <div className="panel-heading text-center">
                                <div className="panel-title">Login in your account</div>
                            </div>
                        </div>
                        <div className="panel-body" >

                        <form id="loginform" className="form-horizontal" role="form" onSubmit={this.onSubmit}>
                                    
                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="username or email"/> 
                                        {
                                            this.state.errors.username &&
                                            <label>
                                                {this.state.errors.username}
                                            </label>
                                        }                                       
                            </div>
                                
                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
                                        {
                                            this.state.errors.password &&
                                            <label>
                                                {this.state.errors.password}
                                            </label>
                                        } 
                            </div>
                                    
                                    
                            <div className="form-group">
                                    <div className="col-sm-12 controls text-center">
                                      <button href="" type="submit" className="btn btn-success">Login</button>
                                    </div>
                            </div>


                            <div className="form-group text-center">
                                <div className="col-md-12 control">
                                    <div className="bottom-line">
                                        Don't have an account! 
                                        <Link to="/signup">Signup</Link>
                                       
                                    </div>
                                </div>
                            </div>    
                        </form>     
                        </div>  
                    </div>

                </div>
                {/* <div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
</div> */}
            </div>
        )

    }
}

export default Login;