import useUser from 'hooks/useUser'
import React from 'react'
import useLocation from 'wouter/use-location'

export default function Fav({ id }) {
  const { isLogged } = useUser()
  const [, navigate] = useLocation()

  const handleClick = () => {
    if (!isLogged) return navigate('/login')
    alert(id)
  }
  return (
    <button onClick={handleClick}>
      <span aria-label='Fav Gif' role='img'>
        corazon
      </span>
    </button>
  )
}
