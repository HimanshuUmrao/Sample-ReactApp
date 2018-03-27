import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './login.css'

class Login extends React.Component{
    render(){
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

                        <form id="loginform" className="form-horizontal" role="form">
                                    
                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="username or email"/>                                        
                            </div>
                                
                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" className="form-control" name="password" placeholder="password"/>
                            </div>
                                    
                                    
                            <div className="form-group">
                                    <div className="col-sm-12 controls text-center">
                                      <a href="" className="btn btn-success">Login</a>
                                    </div>
                            </div>


                            <div className="form-group text-center">
                                <div className="col-md-12 control">
                                    <div className="bottom-line">
                                        Don't have an account! 
                                        <Link to="/signup">Topics</Link>
                                       
                                    </div>
                                </div>
                            </div>    
                        </form>     
                        </div>  
                    </div>

                </div>
            </div>
        )

    }
}

export default Login;