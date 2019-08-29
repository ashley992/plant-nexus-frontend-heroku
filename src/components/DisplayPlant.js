import React from 'react'
import PlantCard from './PlantCard'

const DisplayPlant = ({plant}) => {

  return (
    <div>
      <PlantCard plant={plant}/>
    </div>
  )
}

export default DisplayPlant