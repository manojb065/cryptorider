import React, { Component } from 'react'
import RideList from './RideList'

class Dashboard extends Component {
  constructor(props, { authData }) {
    console.log("*****************************************************************")
    console.log(authData)
    console.log(props)
    console.log("*****************************************************************")
    super(props)
    authData = this.props
  }

  render() {
    return(
      <div id="dashboard" className="container fluid">
        <div className="row">
            <h1 style={{"textAlign":"center"}}>Dashboard</h1>
            <RideList/>
        </div>
      </div>
    )
  }
}

export default Dashboard
