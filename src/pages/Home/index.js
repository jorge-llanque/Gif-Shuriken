/* eslint-disable no-unused-vars */
import React from "react";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import TrendingSearches from "components/TrendingSearches";
import useGifs from "hooks/useGifs";
import { Helmet } from "react-helmet";
import "./../styles/Home.css";

export default function Home() {
  const { loading, gifs } = useGifs();
  /*
        IMPLEMENTAR LOADING O SKELETON PARA RENDERIZAR MIENTRAS SE DESCARGAN LOS GIFS
    */

  return (
    <div className="Home">
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <div className="List__LastSearching">
        <h3>Última búsqueda</h3>
        <ListOfGifs gifs={gifs} />
      </div>
      <TrendingSearches />
    </div>
  );
}
