import React, { useEffect, useState } from 'react'
import getFavs from 'services/getFavs'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (!jwt) return setFavs([])
    getFavs({ jwt }).then(setFavs)
  }, [jwt])

  return (
    <Context.Provider value={{ jwt, setJWT, favs, setFavs }}>
      {children}
    </Context.Provider>
  )
}

export default Context
