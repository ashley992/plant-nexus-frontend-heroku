import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'


const LoggedInNavBar = ({ currentUser, loggedIn }) => {

  return (
    <>
        <NavLink exact activeClass to='/my-plants'> | My Plants |  </NavLink>
        <NavLink exact activeClass to='/my-plants/new'>_ New Plant | </NavLink>
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