import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plants from './components/Plants'

class App extends Component {
  render(){
      return (
        <div className="App">
          <h1>Plant Nexus</h1>
          <br />
          <Plants />
      </div>
    );
  }
}

export default App;
