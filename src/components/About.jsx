import "./About.css";
import foftact from "../assets/foftact.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <p className="sub-title">Know Me More</p>
      <div className="content">
        <div className="about-content">
          <div>
            <p>
              Hi, I&apos;m{" "}
              <span style={{ textDecoration: "underline #f5df4e" }}>
                Gary Felix A
              </span>
            </p>
            <p>
              I&apos;m a web developer, designer, and content writer who thrives
              on crafting seamless digital experiences. I specialize in creating
              visually appealing, user-friendly websites that leave a lasting
              impact. With a strong focus on quality and efficiency, I ensure
              that every project is delivered on time, within budget, and
              tailored to meet client needs.
            </p>
          </div>
          <img src={foftact} alt="foftact" />
        </div>
        <div className="content-details">
          <div>
            <p>Name: </p>
            <p>Gary Felix A</p>
          </div>
          <div>
            <p>Email: </p>
            <p>a.garyfelix@gmail.com</p>
          </div>
          <div>
            <p>Date of birth: </p>
            <p>23 February, 2002</p>
          </div>
          <div>
            <p>From: </p>
            <p>Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
