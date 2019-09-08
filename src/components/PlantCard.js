import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = ({plant}) =>{
// console.log(plant)
  return (
    trip ? 
      <div>
        <Link to=`/my-plants/${plant.id}`>
          <img src={plant.image_url} alt={plant.name}/>
          <p>Name: {plant.name}</p>
        </Link>  
        <Link to={`/my-plants/${plant.id}/edit`}> Edit this plant </Link>
      </div> :
      <p>This plant either died or wasn't found :(</p>
  )
}

export default PlantCard