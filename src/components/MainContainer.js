import React from 'react'
import { connect } from 'react-redux'


const MainContainer = ({ currentUser }) => {

  return (
    <div className="center">
     {currentUser ? <h3>Welcome {currentUser.name}</h3> : ""}
      <h3>Main Container</h3>
    </div>
  )

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)