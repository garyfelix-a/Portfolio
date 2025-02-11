import "./WhatIDo.css";
import design from "../assets/design.png";
import development from "../assets/development.png";
import writing from "../assets/writing.png";
const WhatIDo = () => {
  return (
    <div className="main">
      <div className="title">
        <h2>What I Do</h2>
      </div>
      <p className="sub-title">How I can help your next project</p>
      <div className="works">
        <div className="my-work">
          <img src={design} alt="project1" />
          <h3>Web Development</h3>
          <p>
            I build dynamic, responsive, and user-friendly websites that offer
            seamless experiences across devices. Using the latest technologies,
            I create fast, scalable web applications.
          </p>
        </div>
        <div className="my-work">
          <img src={development} alt="project1" />
          <h3>Web Design</h3>
          <p>
            I craft visually appealing and modern designs that capture attention
            and engage users. My designs focus on simplicity, clarity, and user
            experience to enhance interaction. With a keen eye for color,
            typography, and layout, I create aesthetically balanced visuals.
          </p>
        </div>
        <div className="my-work">
          <img src={writing} alt="project1" />
          <h3>SEO Content Writing</h3>
          <p>
            I create compelling, well-researched, and engaging content tailored
            to the target audience. My writing ensures clarity, SEO
            optimization, and impactful storytelling. I specialize in crafting
            web content, blogs, articles, and marketing copy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
