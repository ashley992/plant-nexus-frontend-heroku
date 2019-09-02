import React from 'react'
import { connect } from 'react-redux'
import MyPlants from './MyPlants.js'


const MainContainer = ({ currentUser }) => {
  
  return (
    <div className="center">
     {currentUser ? <h3>Welcome {currentUser.name}</h3> : ""}
      <MyPlants />
    </div>
  )

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)