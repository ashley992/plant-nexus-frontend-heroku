import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = ({plant}) =>{

  return (
    plant ? 
      <div className="plant-card">
        <Link to={`/plants/${plant.id}`}>
          {plant.image_url === "" ? <img id='happy-cactus' src='/happy-cactus.png' alt='empty plant pic'/> : <img className="uploaded" src={plant.image_url} alt={plant.name}/>}
          <div className='plant-card-text'>
            <p><strong>Name:</strong> {plant.name}</p>
            <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
            <p><strong>Notes:</strong> {plant.notes}</p>
          </div>
        </Link>
        <Link to={`/plants/${plant.id}/edit`}><strong>Edit this plant</strong></Link>
      </div> :
      <div>
        <h2>Sorry, this plant either died or wasn't found :(</h2>
        <img id='sadPlant' src="https://res.cloudinary.com/teepublic/image/private/s--wMHW3OpX--/t_Preview/b_rgb:36538b,c_limit,f_jpg,h_630,q_90,w_630/v1446238240/production/designs/268839_1.jpg" alt="Sad Plant"/>
      </div>
  )
}

export default PlantCard