import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<About/>}
          />
          <Route 
            path="/portfolio" 
            element={<Portfolio/>}
          />
          <Route 
            path="/contact" 
            element={<Contact/>}
          />
          <Route 
            path="/resume" 
            element={<Resume/>}
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
