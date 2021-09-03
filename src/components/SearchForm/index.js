/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation } from "wouter";
import { BsSearch } from "react-icons/bs";

const RATING = ["g", "pg", "pg-13", "r"];

export default function SearchForm({initialKeyword='', initialRating}) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [rating, setRating] = useState(decodeURIComponent(initialRating));
  const [_, pushLocation] = useLocation();
  const [times, setTimes] = useState(0)

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    setTimes(prev => prev + 1)
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
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
