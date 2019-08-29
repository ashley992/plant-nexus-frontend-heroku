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

  componentDidMount(){
    this.setState({
      plants: plants
    })
  }

  render(){
      return (
        <div className="App">
          <h1>Plant Nexus</h1>
          { this.state.plants.length === 0 ?
            "Loading..." :
            <div>
              <DisplayPlant plant={this.state.plants[0]}/>
              <Plants plants={this.state.plants}/>
            </div>
          }
      </div>
    );
  }
}

export default App;
