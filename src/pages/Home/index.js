import React, {useState, useRef} from 'react'
import { Link, useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation()
    const searchInput = useRef()
 
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = () => {
        setKeyword(searchInput.current.value)
    }
    return (
        <>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} type="text" value={keyword} ref={searchInput}/>
            <button>Buscar</button>
        </form>
        <div className="List__LastSearching">
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            </div>
          <TrendingSearches />
        </>
    )
}
