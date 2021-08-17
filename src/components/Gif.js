import  React from "react";
import { Link } from "wouter";
import './Gif.css'

export default function Gif({title, id, url}){
    return (
        <div className="Gif" >
            <Link to={`/gif/${id}`} className="Gif--link">
              <h4 className="Gif__Title">{title}</h4>
              <div className="Gif__Image">
                  <img loading='lazy' src={url} alt={title} />
              </div>
            </Link>
        </div>
    )
}