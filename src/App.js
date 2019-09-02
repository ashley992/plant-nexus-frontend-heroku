import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'

// import Plants from './components/Plants'
// import DisplayPlant from './components/DisplayPlant'
// import plants from './plants-data'


class App extends Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
      return (
        <div>
          <NavBar />
          <h1 className="center">Plant Nexus</h1>
          <MainContainer />
          {/* <Footer /> */}
      </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
