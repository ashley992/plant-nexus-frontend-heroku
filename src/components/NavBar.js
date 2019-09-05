import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'
// import Signup from './Signup.js'
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn }) => {

  return (
    <div className="navbar">
      <h3 className='logoName'>PlantNexus</h3> 
      <h4><Link to='/my-plants/new'>New Plant</Link></h4>
      {/* <h4>Hi {currentUser.attributes.name}!</h4>     */}
      { loggedIn ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps) (NavBar)