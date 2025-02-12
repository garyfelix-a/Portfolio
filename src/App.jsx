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

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <WhatIDo />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
