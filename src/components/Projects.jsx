import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 64px 0 20px 0;
`;

const Title = styled.h2`
  color: ${({theme})=>theme.accent};
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
`;

const Empty = styled.div`
  color: ${({theme})=>theme.textSecondary};
  font-size: 1.13rem;
  padding: 1.3rem;
  background: ${({theme})=>theme.bgLight};
  border-radius: 16px;
  border: 1px solid ${({theme})=>theme.border};
  text-align: center;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Empty>
        {/* You can add Project Cards here in the future */}
        No projects to show yet. Stay tuned!
      </Empty>
    </Section>
  );
}