import React, {useEffect, useRef, useCallback} from 'react'
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'


export default function SearchResults({params}) {
    const { keyword} = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false})

    
    // const handleNextPage = () => setPage( prevPage => prevPage + 1 )
    // const handleNextPage = () => console.log('next page')

    const debounceHandleNextPage = useCallback(debounce(
      () => setPage( prevPage => prevPage + 1 ), 200
    ), [])

    useEffect(function (){
      console.log(isNearScreen)
      if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    
    return (
        <>
          {loading
            ? <i>Cargando...</i>
            : <>
                <h3>{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef} ></div>
              </>
          }  
          
        </>
    )
}
