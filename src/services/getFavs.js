import favData from './favMock'
// const ENDPOINT = 'http://localhost:8000'

// export default function getFavs({jwt}) {
//   return fetch(`${ENDPOINT}/favs`, {
//     method: 'GET',
//     headers: {
//       'Authorization': jwt,
//       'Content-Type': 'application/json'
//     }
//   }).then( res => {
//     if(!res.ok) throw new Error('Response is NOT ok')
//     return res.json()
//   }).then( res => {
//     const { favs } = res
//     return favs
//   })
// }

export default function getFavs({ jwt }) {
  const access = new Promise((res, rej) => {
    setTimeout(() => {
      res({
        favs: favData,
      })
    }, 500)
  })

  return access.then(res => {
    const { favs } = res
    return favs
  })
}
