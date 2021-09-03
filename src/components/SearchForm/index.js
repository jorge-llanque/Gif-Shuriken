/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { BsSearch } from 'react-icons/bs'

const RATING = ['g', 'pg', 'pg-13', 'r']
export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATING[0])
  const [_,pushLocation] = useLocation()
  
  
  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = evt => {
    setRating(evt.target.value)
  }

  return (
      <form onSubmit={handleSubmit} className="Home__Form">
        <button><BsSearch/></button>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."/>
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating type</option>
          {RATING.map(rating => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
      </form>
  )
}
