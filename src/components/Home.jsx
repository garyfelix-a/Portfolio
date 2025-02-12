import "./Home.css";
import profile from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
// import { useState } from "react";
// import { useEffect } from "react";
const Home = () => {
  //   const words = ["Web Developer", "Web Designer", "Content Writer"];
  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //         setIndex((prevIndex) => (prevIndex + 1) % words.length);
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   });

  return (
    <div className="hero">
      <div className="left">
        <div className="info">
          <h2>HELLO, I&apos;M A </h2>
          {/* <p>{words[index]}</p> */}
          <p>
            <Typewriter
              words={["Web Developer", "Web Designer", "Content Writer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </p>
        </div>
        <p className="based">based in Tamil Nadu, India</p>
        <div className="left-buttons">
          <a href="" className="view-my-work">
            View My Works
          </a>
          <a href="" className="contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="right">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
