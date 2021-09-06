import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'
import loginService from 'services/login'
import addFavService from 'services/addFav'

export default function useUser() {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false })
      loginService({ username, password })
        .then(jwt => {
          window.sessionStorage.setItem('jwt', jwt)
          setState({ loading: false, error: false })
          setJWT(jwt)
        })
        .catch(err => {
          window.sessionStorage.removeItem('jwt')
          setState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setJWT]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then(setFavs(id))
        .catch(err => {
          console.log(err)
        })
    },
    [jwt, setFavs]
  )

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    addFav,
    favs,
  }
}
