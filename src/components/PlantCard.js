import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = ({plant}) =>{
  return (
    plant ? 
      <div>
        <Link to={`/plants/${plant.id}`}>
          <img src={plant.image_url} alt={plant.name}/>
          <p>Name: {plant.name}</p>
          <p>Scientific Name: {plant.scientific_name}</p>
          <p>Notes: {plant.notes}</p>
        </Link>
        <Link to={`/plants/${plant.id}/edit`}> Edit this plant </Link>
      </div> :
      <div>
        <h2>Sorry, this plant either died or wasn't found :(</h2>
        <img id='sadPlant' src="https://res.cloudinary.com/teepublic/image/private/s--wMHW3OpX--/t_Preview/b_rgb:36538b,c_limit,f_jpg,h_630,q_90,w_630/v1446238240/production/designs/268839_1.jpg" alt="Sad Plant"/>
      </div>
  )
}

export default PlantCard