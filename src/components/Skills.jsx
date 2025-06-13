import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 64px 0 40px 0;
`;

const Title = styled.h2`
  color: ${({theme})=>theme.accent};
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.6rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({theme})=>theme.bgLight};
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 18px;
  padding: 2rem 1.3rem;
  color: ${({theme})=>theme.text};
  box-shadow: ${({theme})=>theme.shadow};
  font-size: 1.08rem;
  font-weight: 500;
  min-height: 80px;
`;

export default function Skills() {
  return (
    <Section id="skills">
      <Title>Technical Skills</Title>
      <CardGrid>
        <SkillCard initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>
          <b>Programming & Core Concepts:</b><br/>
          Python, Data Structures & Algorithms, OOP, System Design, SQL
        </SkillCard>
        <SkillCard initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
          <b>Web Development:</b><br/>
          Flask, Django, HTML5, CSS3, Bootstrap
        </SkillCard>
        <SkillCard initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}>
          <b>Databases:</b><br/>
          PostgreSQL, MongoDB
        </SkillCard>
        <SkillCard initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}}>
          <b>DevOps & Tools:</b><br/>
          Docker, CI/CD (GitHub Actions)
        </SkillCard>
        <SkillCard initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.4}}>
          <b>Cloud & Integration:</b><br/>
          AWS, SAP BTP Integration Suite
        </SkillCard>
      </CardGrid>
    </Section>
  );
}