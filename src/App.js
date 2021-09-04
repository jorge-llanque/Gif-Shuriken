import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from './pages/Detail'
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from 'context/UserContext'
import NotFound from "pages/NotFound/NotFound";
import Layout from './components/Layout';
import Login from 'pages/Login'

function App() {
  return (
    <UserContextProvider>
      <GifsContextProvider>
        <Layout>
          <Route component={SearchResults} path="/search/:keyword/:rating?" />
          <Route component={Detail} path="/gif/:id" />
          <Route path="/login" component={Login}/>

          <Route component={Home} path="/" />
          <Route component={NotFound} path="/404" />
        </Layout>
      </GifsContextProvider>
    </UserContextProvider>
  );
}

export default App;