import React, { useEffect, useState } from "react";
import './App.css';
import ListOfGifs from "./components/ListOfGifs";
import getGifs from "./services/getGifs";

const GIFS = ["https://media1.giphy.com/media/13o9x4vjo2DTFe/200.webp?cid=ecf05e47h8lsily3pln2iz8hfh6yhl5jiuf1zqrj3ztogxcv&rid=200.webp&ct=g", "https://media4.giphy.com/media/xNT2CcLjhbI0U/giphy.webp?cid=ecf05e47nnyi8skptsvr3f3cn7lc0gnt5h4ed0cevc6isrhg&rid=giphy.webp&ct=g"];
const DIFFERENT_GIF=["https://media0.giphy.com/media/i7pUjIo4rVPQQ/giphy.webp?cid=ecf05e47nnyi8skptsvr3f3cn7lc0gnt5h4ed0cevc6isrhg&rid=giphy.webp&ct=g"];



function App() {
const [gifs, setGifs] = useState(GIFS)

useEffect(function(){
  getGifs({keyword: 'panda'}).then(gifs => setGifs(gifs))
}, [])

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={gifs} />
      <button onClick={() => setGifs(DIFFERENT_GIF)} >Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
