import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../src/Tourism";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggest: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      setStatus("Submitted successfully!");
      setFormData({ name: "", email: "", suggest: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Submission failed.");
    }
  };
  return (
    <div>
      <div id="outercontact">
        <h1>Thank You!</h1>
        <p>Visit Again</p>
      </div>
      <div id="contact">
        <div id="leftcontact">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name" className="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="Suggestions">Suggestions</label>
            <textarea
              name="suggest"
              id="suggest"
              placeholder="Your Suggestions"
              required
              value={formData.suggest}
              onChange={handleChange}
              rows={5}
              cols={30}
            />
            <button style={{ display: "block" }} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div id="rightcontact">
          <h3>
            The website contains all the information about India and Tourism of
            India. For any queries please contact us!
          </h3>
          <div id="imgcontact">
            <a href="mailto:rahulvandrangi1k@gmail.com">
              <img src="./gmail-logo.png" alt="email" />
            </a>
            <a href="https://github.com/rahulvandrangi09">
              <img src="./github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/vandrangi-rahul-872028284/">
              <img src="./linkedin-logo.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <h4>
          © All Rights Reserved · <a href="#"> Back to Top</a>
        </h4>
      </footer>
    </div>
  );
};

export default Contact;
