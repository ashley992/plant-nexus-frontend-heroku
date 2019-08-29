import React, {Component} from 'react'
import plants from '../plants-data'
import PlantCard from './PlantCard'

class Plants extends Component{

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
    const plantCards = this.state.plants.map(
      plant => <PlantCard key={plant.name} plant={plant} />
      )
    return (
      <div>
        <p>My Plants</p>
        { plantCards }
      </div>
    )
  }
}

export default Plants