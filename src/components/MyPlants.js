import React from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'

const MyPlants = ({props}) => {
 //props.myPlants = [ {a plant}, {another plant}]
//  console.log(props.myPlants)
  const plantCards = props.myPlants.length > 0 ? 
  props.myPlants.map(plant => <PlantCard plant={plant} key={plant.id} />) : null

  return (
    <>
      {props.currentUser ? <h3>You're current plants:</h3> : ""}
      <div className="grid">
        {plantCards}
      </div>
    </>
  )
}

const mapStateToProps = props => {
  return {
    props
  }
}

export default connect(mapStateToProps)(MyPlants)