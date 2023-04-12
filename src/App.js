import React from "react";
import { VStack } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <VStack>
        <Nav/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </VStack>
    </>
  );
}

export default App;
