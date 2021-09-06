import useUser from 'hooks/useUser'
import React from 'react'
import { Link, useRoute } from 'wouter'
import './styles.css'

export default function Headers() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <Link to='#' onClick={handleClick}>
        Logout
      </Link>
    ) : (
      <Link to='/login'>Login</Link>
    )
  }

  const content = match ? null : renderLoginButtons({ isLogged })

  return <header>{content}</header>
}
