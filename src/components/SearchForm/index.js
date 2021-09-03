/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from "react";
import { useLocation } from "wouter";
import { BsSearch } from "react-icons/bs";

const RATING = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}
const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export default function SearchForm({initialKeyword='', initialRating}) {
  // const [keyword, setKeyword] = useState(initialKeyword);
  // const [rating, setRating] = useState(decodeURIComponent(initialRating));
  // const [times, setTimes] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times:0
  })
  const {keyword, rating, times} = state
  const [_, pushLocation] = useLocation();

  const handleChange = (evt) => {
    dispatch({
      type: ACTIONS.UPDATE_KEYWORD,
      payload: evt.target.value
    })
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChangeRating = (evt) => {
    dispatch({
      type: ACTIONS.UPDATE_RATING,
      payload: evt.target.value
    })
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
