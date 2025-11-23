// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Project from "./component/Project";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import Footer from "./component/Footer";
const App = () => {
  useEffect(() => {
  AOS.init({ duration: 900, once: true });
}, []);
  return (
    <>
      <Nav />

      <Home />
      <About />
      <Skill />

      <Project />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
