import React, { useEffect, useState } from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <>
      {isLoginLoading && (
        <strong style={{ color: '#fff' }}>Checking credentials...</strong>
      )}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              placeholder='username'
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              placeholder='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  )
}
