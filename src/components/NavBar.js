import React from 'react'
import { connect } from 'react-redux'
import LoggedInNavBar from './LoggedInNavbar'
import LoggedOutNavBar from './LoggedOutNavBar'
import { Link } from 'react-router-dom'


const NavBar = ({ loggedIn }) => {

  return (
    <div className="navbar center">
      <Link to='/'><img className='navPic' src='/logo-2.png' alt='plant-logo'/><h3 className='logoName'> PlantNexus </h3></Link>
      { loggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps) (NavBar)