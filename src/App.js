import React, { useState, useEffect, useRef, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import Load from "./components/Load";
import "./App.css";
import FormInput from "./components/FormInput";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearid = useRef(null);

  const stopFetching = () => {
    clearInterval(clearid.current);
  };

  // async function fetchMoviesHandler() {
  const fetchMoviesHandler = useCallback(async () => {
    //function not recreated unnecessary
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(
        //get
        "https://app-react-3eb95-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );

      const data = await res.json();
      // console.log(res, data, "dsfsdd");

      if (!res.ok) {
        if (!clearid.current) {
          clearid.current = setInterval(() => {
            console.log("first");
            fetchMoviesHandler(); //again call  5sec interval
          }, 5000);
          throw new Error("Something went wrong ...Retrying");
        }
      } else {
        // Clear the retry interval if it was previously set
        clearInterval(clearid.current);
        clearid.current = null;
      }
      // IMPORTANT
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          text: data[key].text,
          date: data[key].date,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      console.log(e.message);
    }
    setIsLoading(false);
  }, []);

  // useEffect(fetchMoviesHandler, [fetchMoviesHandler]); //calling once initially because we keep depencies empty[]
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); // when function changes but it go to infinite loop so useCallback to store function and recreate only if function changes

  console.log(movies, "movies");

  function DeleteItem(id) {
    const arr = movies.filter((movie) => movie.id !== id);
    setMovies(arr);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <FormInput />
      <section>
        {loading && <Load />}
        {!loading && <MoviesList movies={movies} deleteMovie={DeleteItem} />}
        {!loading && error && <p>{error}</p>}
        <button onClick={stopFetching}>STOP</button>
      </section>
    </React.Fragment>
  );
}

export default App;
