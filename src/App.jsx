import { useRef } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import WhatIDo from './components/WhatIDo'

function App() {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
        <Navbar />
        <div id='home'>
        <Home portfolioRef={portfolioRef} contactRef={contactRef} />
        </div>
        <div id='about'>
        <About />
        </div>
        <div id='whatIDo'>
        <WhatIDo />
        </div>
        <div id='resume'>
        <Resume />
        </div>
        <div ref={portfolioRef} id='portfolio'><Portfolio /></div>
        <div ref={contactRef} id='contact'><Contact /></div>
        <Footer />
    </div>
  )
}

export default App
