import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import "./Hero.css"; // Make sure to create/import this CSS file

// const Hero = () => (
//   <section className="hero-section">
//     <div className="hero-bg-image"></div>
//     <div className="hero-content">
//       <h1>Hi, I'm Suryanath Tripathy</h1>
//       <p>
//         Software Developer specialized in building reliable web applications using <b>Python</b>, <b>Flask</b>, <b>Django</b>, with a passion for intuitive UI, automation, and premium user experience.
//       </p>
//       <a
//         href="/My_CV.pdf"
//         download="Suryanath_Tripathy_Resume.pdf"
//         className="resume-btn"
//         as={motion.a}
//         whileHover={{ scale: 1.05 }}
//       >
//         Download Resume
//       </a>
//     </div>
//   </section>
// );

// export default Hero;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  padding-top: 60px;
`;

const Heading = styled(motion.h1)`
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  color: ${({theme})=>theme.accent};
  letter-spacing: -.5px;
`;

const SubHeading = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.2rem;
  color: ${({theme})=>theme.text};
  font-weight: 400;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 24px;
`;

const ResumeBtn = styled.a`
  background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
  color: #fff;
  padding: 0.95rem 2rem;
  border-radius: 36px;
  font-size: 1.05rem;
  font-weight: 600;
  box-shadow: ${({theme})=>theme.shadow};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 32px 0 ${({theme})=>theme.accent2}33;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: ${({theme})=>theme.textSecondary};
  font-size: 1.55rem;
  opacity: 0.8;
  transition: color 0.2s, transform 0.2s, opacity 0.2s;
  &:hover {
    color: ${({theme})=>theme.accent};
    transform: scale(1.15);
    opacity: 1;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <Left>
        <Heading 
          initial={{opacity:0, y:40}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.8, delay: .1}}
        >
          Hi, I'm Suryanath Tripathy
        </Heading>
        <SubHeading
          initial={{opacity:0, y:40}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.8, delay: .3}}
        >
          Software Developer specialized in building reliable web applications using <b>Python, Flask, Django</b>, with a passion for intuitive UI, automation, and premium user experience.
        </SubHeading>
        <img src="myImage.jpg" alt="My Profile" style={{ width: "200px", borderRadius: "50%" }} />
        <ButtonRow>
          <ResumeBtn 
            href="My_CV.pdf" 
            download="Suryanath_Tripathy_Resume.pdf"
            as={motion.a}
            whileHover={{scale:1.05}}
          >
            Download Resume
          </ResumeBtn>
        </ButtonRow>
        <Socials>
          <SocialIcon href="mailto:suryanathtripathy@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/suryanath-tripathy-639450213" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="https://suryahj.github.io/My_page/Index.html" title="Portfolio" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i>
          </SocialIcon>
        </Socials>
      </Left>
    </HeroSection>
  );
}