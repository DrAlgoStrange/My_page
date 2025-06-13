import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  width: 100%;
  background: ${({theme})=>theme.bgLight};
  color: ${({theme})=>theme.text};
  padding: 18px 0;
  box-shadow: ${({theme})=>theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: 0.06em;
  color: ${({theme})=>theme.accent};
  text-shadow: 0 2px 12px #0003;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme})=>theme.text};
    opacity: 0.8;
    transition: opacity 0.2s, color 0.2s;
    &:hover {
      color: ${({theme})=>theme.accent2};
      opacity: 1;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav as={motion.nav} initial={{y: -80}} animate={{y:0}} transition={{duration: .6, type: "spring"}}>
      <Container>
        <Logo href="#hero">Suryanath Tripathy</Logo>
        <NavLinks>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Container>
    </Nav>
  );
}