import React from "react";

import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* <Navigation /> */}
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
