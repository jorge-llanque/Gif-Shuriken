import React, { Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending(){
  const {isNearScreen, fromRef} = useNearScreen({ distance: '100px' })

  return <div ref={fromRef} >
    <Suspense fallback={<h1>Cargando...</h1>} >
      {isNearScreen ? <TrendingSearches /> : <h1>Cargando...</h1> }
    </Suspense>
  </div>
}