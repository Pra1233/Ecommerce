import React, { useRef } from "react";

import MoviesList from "./components/MoviesList";
import Load from "./components/Load";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const clearid = useRef(null);

  const stopFetching = () => {
    clearInterval(clearid.current);
  };

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("https://swapi.dev/api/films/aa");
      const data = await res.json();

      if (!res.ok) {
        if (!clearid.current) {
          clearid.current = setInterval(() => {
            console.log("first");
            fetchMoviesHandler();
          }, 5000);
          throw new Error("Something went wrong ...Retrying");
        }
      } else {
        // Clear the retry interval if it was previously set
        clearInterval(clearid.current);
        clearid.current = null;
      }
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
      console.log(e.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <Load />}
        {!loading && <MoviesList movies={movies} />}
        {!loading && error && <p>{error}</p>}
        <button onClick={stopFetching}>STOP</button>
      </section>
    </React.Fragment>
  );
}

export default App;
