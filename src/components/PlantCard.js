import React from 'react'

const PlantCard = ({plant}) =>{
// console.log(plant)
  return (
    <div>
      <img src={plant.image_url} alt={plant.name}/>
      <p>Name: {plant.name}</p>
    </div>
  )
}

export default PlantCard