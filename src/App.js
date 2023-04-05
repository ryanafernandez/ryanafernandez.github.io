import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <VStack>
        <About/>
        <Skills />
        <Portfolio/>
        <Contact/>
        <Resume/>
        <Footer/>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
