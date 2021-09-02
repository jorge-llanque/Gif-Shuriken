import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from './pages/Detail'
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";
import NotFound from "pages/NotFound/NotFound";
import Layout from './components/Layout';

function App() {
  return (
    <GifsContextProvider>
      <Layout>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        <Route component={NotFound} path="/404" />
      </Layout>
    </GifsContextProvider>
  );
}

export default App;