import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
    function handleScroll(){
        if(window.scrollY > 50){
            setScrolling(true);
        }else{
            setScrolling(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  });


  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function scrollToSection(id){
    const section = document.getElementById(id);

    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }

  return (
    <nav className={scrolling ? "scroll" : ""}>
      {/* Website Title */}
      <div className="title">
        <a href="#">A Gary Felix</a>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : "close"}`}>
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about")}>About Me</a></li>
        <li><a onClick={() => scrollToSection("whatIDo")}>What I do</a></li>
        <li><a onClick={() => scrollToSection("resume")}>Resume</a></li>
        <li><a onClick={() => scrollToSection("portfolio")}>Portfolio</a></li>
        <li><a onClick={() => scrollToSection("contact")}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
