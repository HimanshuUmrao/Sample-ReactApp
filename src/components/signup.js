import React, { Component} from 'react';
import './signup.css'

class Signup extends React.Component{
    render(){
        return(
            <div className="container">
                <div id="signupbox" style={{marginTop:'50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Sign Up</div>
                            <div><a id="signinlink" href="#">Sign In</a></div>
                        </div>  
                        <div className="panel-body" >
                            <form id="signupform" className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label htmlFor="email" className="col-md-3 control-label">Email</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" name="email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="firstname" className="col-md-3 control-label">First Name</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" name="firstname" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="col-md-3 control-label">Last Name</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" name="lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-md-3 control-label">Password</label>
                                    <div className="col-md-9">
                                        <input type="password" className="form-control" name="passwd" placeholder="Password"/>
                                    </div>
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="icode" className="col-md-3 control-label">Invitation Code</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" name="icode" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-offset-3 col-md-9">
                                    <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right"></i> Sign Up</button>
                                </div>                                           
                            </form>
                        </div>
                    </div>

         </div>
            </div>           
           
        )
    }
}


export default Signup;