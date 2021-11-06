import React, { useState } from "react";
import "./Form.css";
import { db } from "./firebase";

const Form = () => {
  // initially state niye rkhtesi. pore eita niye kaj korar jonno
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    // firebase database  a contacts name a ekta collection create hoye name,email,message gula save hoar kaj
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍"); // msg submit button a click korle eita show korbe
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <label>Name</label>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Email</label>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Message</label>
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>

      <button type="submit" style={{ backgroundImage: loader ? "#ccc" : "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", padding: "15px", border: "none", fontWeight: "500", fontSize: "20px" }} > Submit </button>

    </form>
  );
};

export default Form;