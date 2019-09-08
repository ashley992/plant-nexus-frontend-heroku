import React from 'react'
import { connect } from 'react-redux'
import LoggedInNavBar from './LoggedInNavbar'
import LoggedOutNavBar from './LoggedOutNavBar'


const NavBar = ({ currentUser, loggedIn }) => {

  return (
    <div className="navbar">
      <h3 className='logoName'> PlantNexus </h3>
      { loggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}
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