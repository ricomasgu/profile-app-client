import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <NavLink to='/signup' className='btn' > Sign Up </NavLink>
      <NavLink to='/login' className='btn' > Login </NavLink>
    </>

  )
}

export default HomePage