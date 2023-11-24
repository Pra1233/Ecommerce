import React, { useRef } from "react";

const ContactUs = () => {
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
    console.log(obj);
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
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={Add}>
      <label>Name</label>
      <input type="text" ref={name} placeholder="Enter Name" />
      <label>EmailID</label>
      <input type="text" ref={email} placeholder="Enter Email" />
      <label>PhoneNo</label>
      <input type="number" ref={phone} placeholder="Enter PhoneNo" />
      <button>Submit</button>
    </form>
  );
};

export default ContactUs;
