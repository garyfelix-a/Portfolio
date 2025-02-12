import "./Contact.css";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="left-contact">
        <h2>Let&apos;s get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consequuntur et nulla at, perferendis, eos labore quis natus quisquam
          dolores est sed excepturi alias sapiente explicabo expedita
          blanditiis? Quisquam, laboriosam.
        </p>
        <div className="address">
          <h3>Living In</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="phone">
          <h3>Call</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="icons">
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={github} alt="" /></a>
          <a href=""><img src={instagram} alt="" /></a>
          <a href=""><img src={youtube} alt="" /></a>
        </div>
      </div>
      <div className="right-contact">
        <h2>Estimate your project?</h2>
        <form action="">
          <label htmlFor="">Your Name: </label><br />
          <input type="text" /><br />
          <label htmlFor="">Your Email Address: </label><br />
          <input type="email" /><br />
          <label htmlFor="">How can I help you? </label><br />
          <textarea name="help-box" id="" rows={5}></textarea><br />
          <button className="contact-send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
