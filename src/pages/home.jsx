// src/pages/home.jsx
import React from "react";
import WhatWeOffer from "../components/WhatWeOffer";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to FutureMode Tech</h1>
        <p className="text-center mt-4 text-lg">Innovative Robotics & IoT Solutions</p>
      </section>

      <WhatWeOffer /> {/* This will use your Tailwind + Programs.css styles */}

      <section className="cta-section mt-20 text-center">
        <button className="theme-button-hover px-6 py-3 rounded-md">Get Started</button>
      </section>
    </div>
  );
}
