import React from "react";
import './App.css';
import { Route, Link } from "wouter";
import Home from "./pages/Home";
import Detail from './pages/Detail'
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import NotFound from "pages/NotFound/NotFound";
  

function App() {

  return (
    <StaticContext.Provider value={{name: 'midudev',
    suscribeteAlCanal: true}}>
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>App</h1>
        </Link>

        <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        <Route component={NotFound} path="/404" />
        </GifsContextProvider>
      
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;