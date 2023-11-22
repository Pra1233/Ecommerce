import React from "react";
import "./FormInput.css";

const FormInput = () => {
  const Add = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const date = document.getElementById("date").value;
    const obj = {
      title,
      text,
      date,
    };
    console.log(obj);
  };

  return (
    <form>
      <label>Title</label>
      <input type="text" id="title" placeholder="Enter Title" />
      <label>Opening Text</label>
      <input type="text" id="text" placeholder="Enter Text" />
      <label> Release Date</label>
      <input type="date" id="date" />
      <button onClick={Add}>Add Movie</button>
    </form>
  );
};

export default FormInput;
