import useUser from 'hooks/useUser'
import React from 'react'
import { Link, useRoute } from 'wouter'
import logo from '../../assets/logo.png'
import '../styles/Header.css'

export default function Headers() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <div className='Header'>
        <Link to='/'>
          <img src={logo} className='Header__Logo' alt='shuriken logo' />
        </Link>
        <Link to='#' onClick={handleClick}>
          Logout
        </Link>
      </div>
    ) : (
      <>
        <div className='Header'>
          <Link to='/'>
            <img src={logo} className='Header__Logo' alt='shuriken logo' />
          </Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      </>
    )
  }

  const content = match ? null : renderLoginButtons({ isLogged })

  return <header>{content}</header>
}
