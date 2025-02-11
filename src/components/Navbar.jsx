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
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">What I do</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
