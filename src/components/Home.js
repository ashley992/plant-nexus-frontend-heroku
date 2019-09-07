import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Home = ({ currentUser }) => {
  
  return (
    <div className="home">
      <h2>
        Welcome, { currentUser ? <>go to <Link to='/my-plants'>My Plants</Link></> : <>please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link></>}
      </h2>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home)