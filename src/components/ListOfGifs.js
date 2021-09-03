import React from "react";
import Gif from "./Gif";
import './styles/ListOfGifs.css'

export default function ListOfGifs({gifs}) {

    /* MIENTRAS REVISABA EL HOME, TUVE UNA ADVERTENCIA EN DEV TOOLS QUE ENCONTRÓ KEY DUPLICADOS */
    return <div className="ListOfGifs" >
    {gifs.map( ({id, title, url}) => 
        <Gif
            key={id}
            title={title} 
            url={url} 
            id={id} 
        />
    )
    }
    </div>
}