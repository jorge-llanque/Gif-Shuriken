import useUser from 'hooks/useUser'
import React, { useState } from 'react'
import useLocation from 'wouter/use-location'
import Modal from 'components/Modal'
import Login from 'components/Login'

export default function Fav({ id }) {
  const [showModal, setShowModal] = useState(false)
  const { isLogged, addFav, favs } = useUser()
  const [, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    addFav({ id })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'X']
    : ['Add Gif to favorites', 'Corazon']
  return (
    <>
      <button onClick={handleClick}>
        <span aria-label={label} role='img'>
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
    </>
  )
}
