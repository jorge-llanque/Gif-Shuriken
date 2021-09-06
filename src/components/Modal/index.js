import React from 'react'
import './index.css'

export default function Modal({ children, onClose }) {
  return (
    <div className='Modal'>
      <div className='Modal__Content'>
        <button className='btn' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
