// const ENDPOINT = 'http://localhost:8000'

// export default function register({ username, password }) {
//   return fetch(`${ENDPOINT}/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then(res => {
//       if (!res.ok) throw new Error('Response is NOT OK')
//       return true
//     })
// }

export default function login({ username, password }) {
  const access = new Promise((res, rej) => {
    setTimeout(() => {
      res({ jwt: 'jwt.token' })
    }, 1000)
  })

  return access.then(() => true)
}
