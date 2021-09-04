import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Headers() {
  const isLogged = false

  return (
    <div>
      {isLogged ? (
        <Link to='/logout'>Logout</Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  )
}
