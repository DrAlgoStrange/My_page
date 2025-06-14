import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  width: 100%;
  padding: 32px 0 18px 0;
  background: ${({theme})=>theme.bgLight};
  color: ${({theme})=>theme.textSecondary};
  text-align: center;
  margin-top: 3rem;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterWrap>
      © {new Date().getFullYear()} Suryanath Tripathy &nbsp;|&nbsp; Designed with <span style={{color:'#ffb84c'}}>♥</span>
    </FooterWrap>
  );
}