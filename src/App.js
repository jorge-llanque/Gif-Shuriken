import React from "react";
import './App.css';
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from './pages/Detail'
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
  

function App() {

  return (
    <StaticContext.Provider value={{name: 'midudev',
    suscribeteAlCanal: true}}>
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Route component={Home} path="/" />
        <Route 
          component={SearchResults}
          path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;