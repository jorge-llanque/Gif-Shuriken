import useUser from 'hooks/useUser'
import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Headers() {
  const { isLogged, logout } = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <div>
      {isLogged ? (
        <Link to='#' onClick={handleClick}>
          Logout
        </Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  )
}
