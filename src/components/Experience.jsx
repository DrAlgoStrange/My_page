import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 64px 0 34px 0;
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
  padding: 2rem 1.5rem;
  box-shadow: ${({theme})=>theme.shadow};
  color: ${({theme})=>theme.text};
  transition: box-shadow 0.2s;
`;

const Position = styled.h3`
  color: ${({theme})=>theme.accent2};
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const Role = styled.div`
  color: ${({theme})=>theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const Date = styled.div`
  color: ${({theme})=>theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.1rem;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 1.2rem;
  color: ${({theme})=>theme.text};
  margin-bottom: 0;
`;

export default function Experience() {
  return (
    <Section id="experience">
      <Title>Work Experience</Title>
      <Card initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.7}}>
        <Position>TATA CONSULTANCY SERVICES</Position>
        <Role>Systems Engineer</Role>
        <Date>Oct 2023 - Present</Date>
        <List>
          <li>Built and maintained backend systems using Python, Flask, and Django for enterprise web applications, reducing API response time by 35% and handling 100,000+ user transactions monthly.</li>
          <li>Used core programming concepts (DSA, OOP) to improve code structure, boost reusability, and speed up feature delivery.</li>
          <li>Integrated responsive UI components, increasing user satisfaction by 40% and reducing UI bugs by 20%.</li>
          <li>Containerized apps with Docker, automated CI/CD with GitHub Actions, increasing deployment reliability and release frequency.</li>
          <li>Deployed scalable cloud solutions (AWS EC2, Lambda), built SAP BTP Integration Suite flows for streamlined system communication.</li>
        </List>
      </Card>
      <Card initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.7, delay:0.15}}>
        <Position>EUREKA SCIENTECH RESEARCH FOUNDATION</Position>
        <Role>Internship</Role>
        <Date>Aug 2022 - Jan 2023</Date>
        <List>
          <li>Built a Python-based master-client system with Raspberry Pi and sockets to trigger & sync 16 unique voice alerts over LAN.</li>
          <li>Enabled real-time master-client communication, features like muting and global shutdown via REST.</li>
          <li>Automated safety announcements, reducing manual alerting and improving emergency response by 40% in industrial environments.</li>
          <li>Enhanced safety/compliance via consistent, automated audio warnings using scalable RPi hardware.</li>
        </List>
      </Card>
    </Section>
  );
}