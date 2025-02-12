import './App.css'
import About from './components/About'
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
    </div>
  )
}

export default App
