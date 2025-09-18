import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='wholeHome'>
        <h1>🏠 Welcome to Home</h1>

        <Link to='/SignUp'>New User</Link>
        <br/>
        <Link to='/Login'>Already a customer</Link>
    </div>
  )
}

export default Home