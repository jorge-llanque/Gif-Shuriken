// const ENDPOINT = 'http://localhost:8000'

// export default function addFav({id, jwt}) {
//   return fetch(`${ENDPOINT}/favs/${id}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({jwt})
//   }).then( res => {
//     if(!res.ok) throw new Error('Response is NOT ok')
//     return res.json()
//   }).then( res => {
//     const { favs } = res
//     return favs
//   })
// }

export default function addFav({ id, jwt }) {
  const access = new Promise((res, rej) => {
    setTimeout(() => {
      const arr = []
      res({
        favs: arr.push(id),
      })
    }, 1000)
  })

  return access.then(res => {
    console.log(res)
    const { favs } = res
    return favs
  })
}
