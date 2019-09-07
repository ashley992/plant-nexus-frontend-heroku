import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
// import LoggedOutNavBar from './components/LoggedOutNavBar'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyPlants from './components/MyPlants.js'
// import MainContainer from './components/MainContainer.js'
import { Route, withRouter, Switch, Link } from 'react-router-dom'
import NewPlantForm from './components/NewPlantForm'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    const {loggedIn} = this.props
      return (
        <div className='center'>
          {/* { loggedIn ? <NavBar /> : <LoggedOutNavBar />} */}

          <Switch>
            {/* <MainContainer /> */}
            <Route exact path='/' component={NavBar} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={({history})=> <Signup history={history}/>} />
            <Route exact path='/my-plants' component={MyPlants}/>
            <Route exact path='/my-plants/new' component={NewPlantForm}/>
          </Switch>

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
