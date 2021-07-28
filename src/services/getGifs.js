import {API_KEY, API_URL} from './settings'

export default function getGifs({keyword = 'morty'} = {}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=0&rating=pg-13&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if(Array.isArray(data)){
          const gifs = data.map(image => {
              const {title, id } = image
              const { url } = image.images.downsized_medium
              return { title, id, url}
            })
          return gifs
      }
    })
}