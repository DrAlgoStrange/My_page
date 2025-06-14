import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = {
  bg: "#16181C",
  bgLight: "#23262D",
  accent: "#7f5af0",
  accent2: "#ffb84c",
  text: "#eaeaea",
  textSecondary: "#a1a1a1",
  border: "rgba(255,255,255,0.08)",
  shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
    font-family: 'Inter', 'Roboto', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    min-height: 100vh;
  }
  ::selection {
    background: ${({theme})=>theme.accent2}33;
  }
  a {
    color: ${({theme})=>theme.accent};
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${({theme})=>theme.accent2};
    }
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>
        <Navbar />
        <Container>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </Container>
        <Footer />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;