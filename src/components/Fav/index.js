import React from 'react'

export default function Fav({ id }) {
  const handleClick = () => {
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
