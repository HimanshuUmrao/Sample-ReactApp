import React, { Component } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Header from '../header'
// import axios from 'axios'
import { compose, withApollo } from 'react-apollo'
import { USER_LIST } from '../query';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      logout: localStorage.getItem('token')
    };
  }
  componentWillMount = async () => {
    let response = await this.props.client.query({
      query: USER_LIST
    })
    this.setState({
      data: response.data.users
    })
    
  }
  
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  logout() {
    localStorage.setItem('token', '');
    this.props.history.push("/");
  }
  render() {
    return [
      <Header logout={() => this.logout()} />,
      <div className="container mt-5">
        <ReactTable
          data={this.state.data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              accessor: "lastName"
            },
            {
              Header: "User Name",
              accessor: "userName"
            },
            {
              Header: "Email",
              accessor: "email"
            }
          ]}
        />
      </div>
    ]

  }
}

export default compose(withApollo)(Dashboard);