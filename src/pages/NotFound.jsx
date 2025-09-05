import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-4 text-white'>
        <h3 className='text-4xl font-bold'>Movie Not Found</h3>
        <Link to={'/'} className='border-2 rounded-lg p-2 '>Go To Home</Link>
    </div>
  )
}

export default NotFound