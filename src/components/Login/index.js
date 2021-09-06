import React, { useEffect, useState } from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

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
          <input
            placeholder='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            type='password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  )
}
