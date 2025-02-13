import "./Home.css";
import profile from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";
const Home = ({portfolioRef, contactRef}) => {
 
  function scrollIntoPortfolio (e){
      e.preventDefault();
      if(portfolioRef.current){
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
      }
  } 
  function scrollIntoContact (e){
      e.preventDefault();
      if(contactRef.current){
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
  } 

  return (
    <div className="hero">
      <div className="left">
        <div className="info">
          <h2>HELLO, I&apos;M A </h2>
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
          <a href="" className="view-my-work" onClick={scrollIntoPortfolio}>
            View My Works
          </a>
          <a href="" className="contact" onClick={scrollIntoContact}>
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

Home.propTypes = {
  portfolioRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  contactRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
}

export default Home;
