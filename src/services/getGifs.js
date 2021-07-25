const apiKey ="IZE0NL9EkmjMQwPHviXLbqQ7au0SZjlw";

export default function getGifs({keyword = 'morty'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=pg-13&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if(Array.isArray(data)){
          const gifs = data.map(image => image.images.downsized_medium.url)
          return gifs
      }
    })
}