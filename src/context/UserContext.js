import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [jwt, setJWT, favs, setFavs] = useState(() =>
    window.sessionStorage.getItem('jwt')
  )

  return (
    <Context.Provider value={{ jwt, setJWT, favs, setFavs }}>
      {children}
    </Context.Provider>
  )
}

export default Context
