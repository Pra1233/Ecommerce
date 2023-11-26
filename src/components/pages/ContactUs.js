import React, { useRef, useState } from "react";
import { useHistory, Prompt } from "react-router-dom";

const ContactUs = () => {
  const [isEntering, setisEntering] = useState(false);

  const history = useHistory();
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const Add = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };

    PostRequest(obj);
  };

  const PostRequest = async (obj) => {
    try {
      const response = await fetch(
        "https://app-react-3eb95-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "Post",
          body: JSON.stringify(obj),
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Message sent successfully");
        history.push("/"); //redirect
      }
    } catch (e) {
      console.log(e);
    }
  };
  //showing warning when user leave the form
  const formFocusHandler = () => {
    setisEntering(true);
  };

  return (
    <React.Fragment>
      <Prompt
        when={isEntering}
        message={() => "Are you sure want to leave your data will be lost"}
      />
      <form onSubmit={Add} onFocus={formFocusHandler}>
        <label>Name</label>
        <input type="text" ref={name} placeholder="Enter Name" />
        <label>EmailID</label>
        <input type="text" ref={email} placeholder="Enter Email" />
        <label>PhoneNo</label>
        <input type="number" ref={phone} placeholder="Enter PhoneNo" />
        <button onClick={() => setisEntering(false)}>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default ContactUs;
