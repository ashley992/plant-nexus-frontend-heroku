import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyPlants from './components/MyPlants.js'
// import MainContainer from './components/MainContainer.js'
import { Route, withRouter } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const loggedIn = this.props
      return (
        <div className='center'>
          {/* <Switch> */}
            <NavBar />
            {/* <MainContainer /> */}
            <Route exact path='/' render={() => loggedIn ? <MyPlants /> : <Home />} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/plants' component={MyPlants}/>
          {/* </Switch> */}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
