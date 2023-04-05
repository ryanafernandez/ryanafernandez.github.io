import React from "react";
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
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
        <Footer/>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
