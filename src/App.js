import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {


  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    try {
      const res = await fetch("https://swapi.dev/api/films/");
      const data = await res.json();

      const transformedMovies = data.results.map((m) => {
        return {
          id: m.episode_id,
          title: m.title,
          openingText: m.opening_crawl,
          releaseData: m.release_date,
        };
      });

      console.log(data);
      setMovies(transformedMovies);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
