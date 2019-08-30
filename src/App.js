import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plants from './components/Plants'
import DisplayPlant from './components/DisplayPlant'
import plants from './plants-data'


class App extends Component {

  constructor(){
    super()
    this.state = {
      plants: []
    }
  }

  // componentDidMount(){

  // }

  render(){
      return (
        <div className="App">
          <h1>Plant Nexus</h1>
          
      </div>
    );
  }
}

export default App;
