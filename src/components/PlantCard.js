import React from 'react'

const PlantCard = ({ plant }) => {

  return (
    <div>
      <img src={plant.url}/>
      <p>Name: {plant.name}</p>
    </div>
  )
}

export default PlantCard