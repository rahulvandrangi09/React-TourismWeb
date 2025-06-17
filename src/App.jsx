import React from "react";
import "./index.css";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Tourist from "../Components/Tourist";
import History from "../Components/History";
import WikiPedia from './WikiPedia'
import Contact from "../Components/Contact";
function App() {
  console.log(import.meta.env.VITE_OTHER_TOURISM)
  return (
    <>
        <Hero />
        <About />
        <Tourist />
        <History />
        <Contact />
    </>
  );
}

export default App;
