import "./Contact.css";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
// import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const keys = {
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
}

const Contact = () => {
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const name = form.current["from_name"].value.trim();
    const email = form.current["from_email"].value.trim();

    if(name.length < 2 || name.length > 50){
      alert("Name should be between 2 and 50 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(keys.serviceId, keys.templateId, form.current, {
        publicKey: keys.publicKey,
      })
      .then(
        () => {
          console.log("Email sent successfully!");
          alert("Email sent successfully");
        },
        (error) => {
          console.log("Failed to send email", error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div className="contact-page">
      <div className="left-contact">
        <h2>Let&apos;s get in touch</h2>
        <p>
          I love exploring new projects and tackling creative challenges. Feel
          free to share details about your ideas so we can make the most of our
          first conversation.
        </p>
        <div className="address">
          <h3>Living In</h3>
          <p>Salem, Tamil Nadu, India</p>
        </div>
        <div className="phone">
          <h3>Call</h3>
          <p>+91 86677 57706</p>
        </div>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/gary-felix-a-4075541a2/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/garyfelix-a" target="_blank">
            <img src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/gary_felix_/" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/@foftact" target="_blank">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="right-contact">
        <h2>Estimate your project?</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="">Your Name: </label>
          <br />
          <input type="text" name="from_name" autoComplete="off" required />
          <br />
          <label htmlFor="">Your Email Address: </label>
          <br />
          <input type="email" name="from_email" autoComplete="off" required />
          <br />
          <label htmlFor="">How can I help you? </label>
          <br />
          <textarea
            name="message"
            id=""
            rows={5}
            autoComplete="off"
            required
          ></textarea>
          <br />
          <button className="contact-send-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
