import React from 'react'

const PlantCard = ({plant}) =>{
// console.log(plant)
  return (
    <>
      <img src={plant.image_url} alt={plant.name}/>
      <p>Name: {plant.name}</p>
    </>
  )
}

export default PlantCard