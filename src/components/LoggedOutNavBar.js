import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const LoginSignupNavBar = ({ currentUser }) => {
  
  return (
    <>
      <h4>
        Welcome, please <Link to='/signup'> Signup </Link> or <Link to='/login'> Login</Link>
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