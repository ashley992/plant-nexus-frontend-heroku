import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
// import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyPlants from './components/MyPlants.js'
// import MainContainer from './components/MainContainer.js'
import { Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
      return (
        <div>
          <NavBar />
          <h1 className="center">Plant Nexus</h1>
          {/* <MainContainer /> */}
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/plants' component={MyPlants}/>
        </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
