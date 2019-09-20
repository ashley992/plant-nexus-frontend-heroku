import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const LoggedInNavBar = ({ currentUser, loggedIn }) => {

  return (
    <>
        <NavLink exact activeClassName="active" className='nav-link' to='/plants'>My Plants</NavLink>
        <NavLink exact activeClassName="active" className='nav-link' to='/plants/new'>New Plant</NavLink>
        <NavLink exact activeClassName="active" className='nav-link' to={`/users/${currentUser.id}/edit`}>Edit Profile</NavLink>
        <Logout/>
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(LoggedInNavBar)