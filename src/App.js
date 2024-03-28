import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tutorials from "./components/Tutorials";
import Project01 from "./pages/Project01";
import Project02 from "./pages/Project02";
import GraphicDesign from "./pages/GraphicDesign";

function App() {
  return (
     <Router>  
      <NavBar />
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={
      <>
        <Home />
        <Skills />
        <About />
        <Projects />
        <Tutorials />
      </>
      
    } />
      <Route path="/project01" element={<Project01/>} />
      <Route path="/project02" element={<Project02/>} />
      <Route path="/graphicdesign" element={<GraphicDesign/>} />
    </Routes>
    
    </div>
    <Footer />
  </Router>
  );
}

export default App;
