import React, { Component} from 'react';
import './signup.css'
import { Link } from 'react-router-dom'
import { compose, withApollo, graphql } from 'react-apollo'
import { SIGN_UP } from '../query'
import { BrowserRouter , Redirect } from 'react-router';


class SignUp extends Component {
    
    constructor () {
        super();
        this.state = ({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            cpassword: ''
          })
      }

    
    onSubmit = async (e) => {
      e.preventDefault();
      const { firstName, lastName, userName, email, password, cpassword } = this.state
      console.log(firstName, lastName, userName, email, password, cpassword)
      let inputdata = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
        // cpassword: cpassword
        
      }
      let response = await this.props.signup({
        variables: { input: inputdata }
      })
        
      console.log(response)
      this.setState({ fireRedirect: true })
    }


    changeHandler = (e) => {
        let { name, value } = e.target
        console.log(name)
        this.setState({
          [name]: value
        })
        
      }
      

    render(){
        const { firstName, lastName, userName, email, password, cpassword } = this.state
        const { fireRedirect } = this.state
       
             return(
            <div className="container">
                <div id="signupbox" style={{marginTop:'50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Sign Up</div>
                            <div><a id="signinlink" href="#">Sign In</a></div>
                        </div>  
                        <div className="panel-body" >
                            <form id="signupform" onSubmit={this.onSubmit} className="form-horizontal" role="form">                                  
                                <div className="form-group">
                                    <label htmlFor="firstname" className="col-md-3 control-label">First Name</label>
                                    <div className="col-md-9">
                                        <input type="text" value={firstName} onChange={this.changeHandler} className="form-control" name="firstName" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="col-md-3 control-label">Last Name</label>
                                    <div className="col-md-9">
                                        <input type="text" value={lastName} onChange={this.changeHandler} className="form-control" name="lastName" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-md-3 control-label">Email</label>
                                    <div className="col-md-9">
                                        <input type="text" value={email} onChange={this.changeHandler} className="form-control" name="email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-md-3 control-label">Password</label>
                                    <div className="col-md-9">
                                        <input type="password" value={password} onChange={this.changeHandler} className="form-control" name="password" placeholder="Password"/>
                                    </div>
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="password" className="col-md-3 control-label">Confirm Password</label>
                                    <div className="col-md-9">
                                        <input type="password" value={cpassword} onChange={this.changeHandler} className="form-control" name="cpassword" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <div className="col-md-offset-3 col-md-9">
                                    <button id="btn-signup" type="submit" className="btn btn-info"><i className="icon-hand-right"></i> Sign Up</button>
                                </div>                                           
                            </form>
                           {fireRedirect && (
                            <Redirect to={"/"}/>
                            )} 
                        </div>
                    </div>

         </div>
            </div>           
           
        )
       
    }
}


// export default Signup;

export default compose(
    withApollo,
    graphql(SIGN_UP, {
        name: 'signup'
    })
)(SignUp);

