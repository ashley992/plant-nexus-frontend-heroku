import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
// import Plants from './components/Plants'
// import DisplayPlant from './components/DisplayPlant'
// import plants from './plants-data'


class App extends Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
      return (
        <div className="App">
          <h1>Plant Nexus</h1>
          <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
