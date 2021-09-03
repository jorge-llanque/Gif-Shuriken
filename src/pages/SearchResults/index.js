/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useCallback} from 'react'
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import {Helmet} from 'react-helmet'


export default function SearchResults({params}) {
    const { keyword} = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const externalRef = useRef()
    
    const {isNearScreen} = useNearScreen({
      externalRef: loading ? null : externalRef, 
      once: false
    })


    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

    const debounceHandleNextPage = useCallback(debounce(
      () => setPage( prevPage => prevPage + 1 ), 200
    ), [])

    useEffect(() => {
      if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    
    /* 
      SERÍA BUENO IMPLEMENTAR UN SEGUNDO LOADING MIENTRAS SE VA HACIENDO SCROLL Y SE VAN CARGANDO NUEVOS GIFS
    */
    return (
        <>
          {loading
            ? <i>Cargando...</i>
            : <>
              <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}/>
                <meta name="rating" content="General"/>
              </Helmet>
                <h3>{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef} ></div>
              </>
          }  
        </>
    )
}
