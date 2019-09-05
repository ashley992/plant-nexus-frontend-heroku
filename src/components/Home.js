import React from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home">
      <h2>Welcome, please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link></h2>
    </div>
  )
}

export default Home