import React, { useState } from "react";
import './App.css';
import ListOfGifs from "./components/ListOfGifs";
import { Route, Link } from "wouter";
import Home from "./pages/Home";
import Detail from './pages/Detail'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Route component={Home} path="/" />
        <Route 
          component={ListOfGifs}
          path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
}

export default App;
