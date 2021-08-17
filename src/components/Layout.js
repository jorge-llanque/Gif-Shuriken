import React from 'react'
import Header from './Header'
import './styles/Layout.css'

export default function Layout({children}) {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  )
}
