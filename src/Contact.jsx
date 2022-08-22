import { useState } from "react";
import "./contact.scss";

export default function Contact() {

  const [message , setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="form">
        <h2> Contact </h2>
        <form action="https://formsubmit.co/82edac45290f917c0cf705af3b0962df" method="POST">
          <input type="text" placeholder="Email" required/>
          <textarea placeholder="Message" required></textarea>
          <button type="submit" onSubmit={handleSubmit}>Send</button>
          {message && <span>Thank You !!!</span>}

            <a href="https://www.linkedin.com/in/neha-hakke-10004115b/">
              <img src="linkedin.png" alt=""></img>
            </a>
            <a href="https://twitter.com/HakkeNeha">
              <img src="twitter.png" alt=""></img>
            </a>
        </form>
      </div>
    </div>
  );
}


