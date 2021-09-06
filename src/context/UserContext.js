import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))
  const [favs, setFavs] = useState([])

  return (
    <Context.Provider value={{ jwt, setJWT, favs, setFavs }}>
      {children}
    </Context.Provider>
  )
}

export default Context
