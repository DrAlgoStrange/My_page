import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 64px 0 20px 0;
`;

const Title = styled.h2`
  color: ${({theme})=>theme.accent};
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
`;

const Card = styled(motion.div)`
  background: ${({theme})=>theme.bgLight};
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 16px;
  margin-bottom: 28px;
  padding: 1.4rem 1.2rem;
  box-shadow: ${({theme})=>theme.shadow};
  color: ${({theme})=>theme.text};
`;

const Degree = styled.h3`
  color: ${({theme})=>theme.accent2};
  font-size: 1.12rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
`;

const Institute = styled.div`
  color: ${({theme})=>theme.text};
  font-size: 1.01rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Date = styled.div`
  color: ${({theme})=>theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
`;

export default function Education() {
  return (
    <Section id="education">
      <Title>Education</Title>
      <Card initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.7}}>
        <Degree>B.Tech, Electronics & Instrumentation Engineering</Degree>
        <Institute>Techno Main Saltlake</Institute>
        <Date>Aug 2019 - Jun 2023</Date>
        <div>CGPA: <b>9.27</b></div>
      </Card>
      <Card initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.7, delay:0.13}}>
        <Degree>All India Senior School Certificate Examination</Degree>
        <Institute>Kendriya Vidyalaya Command Hospital</Institute>
        <Date>2019</Date>
        <div>Percentage: <b>79.2%</b></div>
      </Card>
    </Section>
  );
}