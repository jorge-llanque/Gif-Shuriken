import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Modal({ children, onClose }) {
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

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
