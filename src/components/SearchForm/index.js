/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "wouter";
import { BsSearch } from "react-icons/bs";
import useForm from './hook'

const RATING = ["g", "pg", "pg-13", "r"];

export default function SearchForm({initialKeyword='', initialRating="g"}) {
  const {keyword, rating, times, updateKeyword, updateRating} = useForm({
    initialKeyword,
    initialRating
  })
  const [_, pushLocation] = useLocation();

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  };

  return (
    <form onSubmit={handleSubmit} className="Home__Form">
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATING.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="Search a gif here..."
      />
      <button>
        <BsSearch />
      </button>
      <small style={{color:"#fff"}}>{times}</small>
    </form>
  );
}
