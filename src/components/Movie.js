import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  console.log(props);
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.text}</h3>
      <p>{props.date}</p>
      <button onClick={() => props.DeleteItem(props.id)}>DELETE</button>
    </li>
  );
};

export default Movie;
