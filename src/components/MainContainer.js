import React from 'react'
import { connect } from 'react-redux'
import MyPlants from './MyPlants.js'


const MainContainer = ({ currentUser }) => {
  // console.log(currentUser)
  return (
    <div className="center">
     {currentUser ? <h3>Welcome {currentUser.attributes.name}</h3> : ""}
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