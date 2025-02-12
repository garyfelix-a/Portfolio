import "./Resume.css";
import html5 from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import java from "../assets/java.jpg";
import React from "../assets/react.png";
import sql from "../assets/sql.png";
import nodejs from "../assets/nodejs.png";

const Resume = () => {
  return (
    <div className="resume">
      <div className="title">
        <h2>Resume</h2>
      </div>
      <p className="sub-title">A Summary About My Resume</p>
      <div className="resume-content">
        <div className="left-and-right">
          <div className="left">
            <h2>Education Details</h2>
            <div className="ed">
              <div className="ed-details">
                <h3>Bachelor of Computer Science and Engineering</h3>
                <p>Knowledge Institute Of Technology, KIOT / 2019 - 2023</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque impedit eligendi tempora quam. In aliquid fugit a
                  cupiditate quaerat velit?
                </p>
              </div>
              <div className="ed-details">
                <h3>Class XII standard</h3>
                <p>St. John&apos;s Higher Secondary School / 2018 - 2019</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque impedit eligendi tempora quam. In aliquid fugit a
                  cupiditate quaerat velit?
                </p>
              </div>
              <div className="ed-details">
                <h3>Class X standard</h3>
                <p>St. John&apos;s Higher Secondary School / 2016 - 2017</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque impedit eligendi tempora quam. In aliquid fugit a
                  cupiditate quaerat velit?
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Experience Details</h2>
            <div className="ex">
              <div className="ex-details">
                <h3>Freelance Content Writer</h3>
                <p>Foftact.com / 2020 - Current</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi molestiae nostrum cumque voluptatum? Quis aliquam
                  incidunt totam voluptate numquam qui.
                </p>
              </div>
              <div className="ex-details">
                <h3>React JS Developer Internship</h3>
                <p>Deecodes.io / 2024 - 2024</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae odit aliquid quidem impedit dicta beatae, quas
                  deleniti officia facere! Cum?
                </p>
              </div>
              <div className="ex-details">
                <h3>Cisco Cybersecurity Internship</h3>
                <p>Cisco / 2022 - 2022</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, delectus? Qui maxime quidem veniam commodi, autem
                  repudiandae quaerat expedita nobis? Quo, vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-skills">
          <h2>My-Skills</h2>
          <div className="skill-img">
            <img src={html5} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={java} alt="" />
            <img src={sql} alt="" />
            <img src={React} alt="" />
            <img src={nodejs} alt="" />
          </div>
        </div>
      </div>
      {/* <a className="download-btn"></a> */}
      <a href="/resume.pdf" download="Gary Felix A - Resume.pdf">Download CV</a>
    </div>
  );
};

export default Resume;
