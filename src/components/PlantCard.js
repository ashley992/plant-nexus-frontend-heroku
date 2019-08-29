import React from 'react'

const PlantCard = ({ plant }) => {

  return (
    <>
      <img src={plant.img_url} alt={plant.sciName}/>
      <p>Name: {plant.name}</p>
      <p>Scientific Name: {plant.sciName}</p>
    </>
  )
}

export default PlantCard