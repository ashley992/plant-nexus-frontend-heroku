import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js'
import Plants from './components/Plants'
import DisplayPlant from './components/DisplayPlant'
import plants from './plants-data'


class App extends Component {


  // componentDidMount(){

  // }

  render(){
      return (
        <div className="App">
          <h1>Plant Nexus</h1>
          <Login />
      </div>
    );
  }
}

export default App;
