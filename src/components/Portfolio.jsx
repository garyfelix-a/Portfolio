import "./Portfolio.css";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";

// const projects = [
//   {
//     name: "Foftact",
//     category: "Content Writing",
//     image: "../assets/work5.png",
//     link: "https://foftact.com/",
//   },
//   {
//     name: "Weather React Website",
//     category: "Web Development",
//     image: "../assets/work4.png",
//     link: "https://weather-app-af5a9.web.app/",
//   },
//   {
//     name: "AGF Xpense Xplorer Website",
//     category: "Web Development",
//     image: "../assets/work2.png",
//     link: "https://agfxpensexplorer.netlify.app/",
//   },
//   {
//     name: "AGF Snefers Website",
//     category: "Web Development",
//     image: "../assets/work3.png",
//     link: "https://agfsnefers.netlify.app/",
//   },
//   {
//     name: "Customer Care Registry",
//     category: "Web Development",
//     image: "../assets/work1.png",
//     link: "https://github.com/GaryFelix/customer-care-registry-clg-project",
//   },
// ];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="title">
        <h2>Portfolio</h2>
      </div>
      <p className="sub-title">Some of my most recent projects</p>
      <div className="projects">
        <a
          href="https://github.com/GaryFelix/customer-care-registry-clg-project"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={work1} alt="customer care registry" />
          </div>
          <div className="project-info">
            <h3>customer care registry</h3>
            <p>Web Development</p>
          </div>
        </a>
        <a
          href="https://agfxpensexplorer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={work2} alt="customer care registry" />
          </div>
          <div className="project-info">
            <h3>AGF Xpense Xplorer Website</h3>
            <p>Web Development</p>
          </div>
        </a>
        <a
          href="https://agfsnefers.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={work3} alt="customer care registry" />
          </div>
          <div className="project-info">
            <h3>AGF Snefers Website</h3>
            <p>Web Development</p>
          </div>
        </a>
      </div>
      <div className="projects-2">
        <a
          href="https://weather-app-af5a9.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={work4} alt="customer care registry" />
          </div>
          <div className="project-info">
            <h3>Weather React Website</h3>
            <p>Web Development</p>
          </div>
        </a>
        <a
          href="https://foftact.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={work5} alt="customer care registry" />
          </div>
          <div className="project-info">
            <h3>Foftact - Own Website</h3>
            <p>Content Writing</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
