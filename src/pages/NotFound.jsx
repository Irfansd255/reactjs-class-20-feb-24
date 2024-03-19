import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1 className='text-danger'>Page not found 404!</h1>
        <Link to="/home">Go to Home</Link>
    </div>
  )
}

export default NotFound