import React from "react";
import { useRef } from "react";
import "./FormInput.css";

const FormInput = () => {
  const title = useRef("");
  const text = useRef("");
  const date = useRef("");

  const Add = (e) => {
    e.preventDefault();
    const obj = {
      title: title.current.value,
      text: text.current.value,
      date: date.current.value,
    };
    PostRequest(obj);
    console.log(obj);
  };

  const PostRequest = async (obj) => {
    try {
      const response = await fetch(
        "https://app-react-3eb95-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            //not required
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data, "data");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <label>Title</label>
      <input type="text" id="title" ref={title} placeholder="Enter Title" />
      <label>Opening Text</label>
      <input type="text" id="text" ref={text} placeholder="Enter Text" />
      <label> Release Date</label>
      <input type="date" id="date" ref={date} />
      <button onClick={Add}>Add Movie</button>
    </form>
  );
};

export default FormInput;
