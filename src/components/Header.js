import React from 'react'
import { Link } from 'wouter'
import Navbar from './Header'
import './styles/Header.css'
import logo from './../assets/logo.png'

export default function Header() {
  return (
    <div className="Header">
      <Navbar/>
      <Link to="/">
        <img src={logo} className="Header__Logo" alt="shuriken logo"/>
      </Link>
    </div>
  )
}
