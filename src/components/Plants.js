import React, {Component} from 'react'
import PlantCard from './PlantCard'

const Plants = ({ plants }) => {

    const plantCards = plants.map(
      plant => <PlantCard key={plant.name} plant={plant} />
      )
    return (
      <div>
        <p>My Plants</p>
        { plantCards }
      </div>
    )

}

export default Plants