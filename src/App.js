import React from "react";

import MoviesList from "./components/MoviesList";
import Load from "./components/Load";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  // if (movies) {
  //   setIsLoading(false);
  // }
  return (
    <React.Fragment>
      {loading && <Load />}
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
