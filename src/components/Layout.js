import React from 'react'
import Headers from './Headers'
import './styles/Layout.css'

export default function Layout({children}) {
  return (
    <div className="Layout">
      <Headers />
      {children}
    </div>
  )
}
