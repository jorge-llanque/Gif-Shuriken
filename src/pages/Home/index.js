/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';
import {Helmet} from 'react-helmet'
import { BsSearch } from 'react-icons/bs'
import './../styles/Home.css'


export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation()
    const searchInput = useRef()

    const {loading, gifs} = useGifs()
    /*
        IMPLEMENTAR LOADING O SKELETON PARA RENDERIZAR MIENTRAS SE DESCARGAN LOS GIFS
    */

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = () => {
        setKeyword(searchInput.current.value)
    }
    return (
        <div className="Home">
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="Home__Form">
                <input onChange={handleChange} type="text" value={keyword} ref={searchInput}/>
                <button type="submit"><BsSearch/></button>
            </form>
            <div className="List__LastSearching">
                <h3>Última búsqueda</h3>
                <ListOfGifs gifs={gifs} />
                </div>
            <TrendingSearches />
        </div>
    )
}
