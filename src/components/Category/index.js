import React from 'react'
import {Link} from 'wouter'
import './../styles/Category.css'

export default function Category({name, options}) {

  return (
    <div className="Category">
       <h1 className="Category__Title">{name}</h1> 
        <ul className="Category__Content">
          {
            options.map( singleOption =>(
              <li key={singleOption} >
                <Link to={`/search/${singleOption}`}>
                  {singleOption}
                </Link>
              </li> ))
          }
          </ul>
    </div>
  )
}
