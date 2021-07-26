import  React from "react";

export default function Gif({title, id, url}){
    return (
        <div>
            <h4>{title}</h4>
            <img loading='lazy' src={url} alt={title} />
        </div>
    )
}