import React from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'

const MyPlants = ({ myPlants }) => {
 //myPlants = [ {a plant}, {another plant}]

  const displayPlants = myPlants.map(plant => <PlantCard plant={plant} key={plant.name} />)
  
  return (
    <div>
      <h5>You're current plants:</h5>
      {displayPlants}
    </div>
  )
}

const mapStateToProps = ({ myPlants}) => {
  return {
    myPlants
  }
}

export default connect(mapStateToProps)(MyPlants)