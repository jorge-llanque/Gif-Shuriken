import React from 'react'

export default function Modal({ children, onClose }) {
  return (
    <div className='Modal'>
      <div className='Modal__Contenido'>
        <button className='btn' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
