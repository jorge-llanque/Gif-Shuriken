import useUser from 'hooks/useUser'
import React from 'react'
import useLocation from 'wouter/use-location'

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser()
  const [, navigate] = useLocation()
  console.log(favs)
  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate('/login')
    addFav({ id })
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'X']
    : ['Add Gif to favorites', 'Corazon']
  return (
    <button onClick={handleClick}>
      <span aria-label={label} role='img'>
        {emoji}
      </span>
    </button>
  )
}
