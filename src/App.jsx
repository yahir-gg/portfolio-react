import './App.css'
import Home from './portafolio/Home'
import About from './portafolio/About'
import Projects from './portafolio/Projects';
import Contact from './portafolio/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
