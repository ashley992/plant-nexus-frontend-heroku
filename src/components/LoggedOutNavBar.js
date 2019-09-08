import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const LoginSignupNavBar = ({ currentUser }) => {
  
  return (
    <>
      <h4>
        Welcome, please <NavLink to='/signup'> Signup </NavLink> or <NavLink to='/login'> Login</NavLink>
      </h4>
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(LoginSignupNavBar)