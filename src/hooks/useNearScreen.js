import { useEffect, useRef, useState } from 'react'


export default function useNearScreen({ distance = '50px' }) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(function(){
  
    let observer
    const onChange = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting){
        setShow(true)
        observer.disconnect()
      }
    }
    observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    observer.observe(fromRef.current)

    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}
