import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn }) => {

  return (
    <div className="navbar">
      <h3 className='logoName'>PlantNexus</h3> 
      <NavLink to='/my-plants'>My Plants</NavLink>
      <NavLink to='/my-plants/new'>New Plant</NavLink>
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