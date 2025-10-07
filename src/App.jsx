// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import VisionMission from "./components/VisionMission";
import Programs from "./components/Programs";
import WhatWeOffer from "./components/WhatWeOffer";
import Chatbot from "./components/Chatbot";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <WhatWeOffer />
      <Programs />
      <Chatbot />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
