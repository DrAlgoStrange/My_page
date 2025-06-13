import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Section = styled.section`
  padding: 64px 0 32px 0;
`;

const Title = styled.h2`
  color: ${({theme})=>theme.accent};
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: ${({theme})=>theme.bgLight};
  border-radius: 16px;
  border: 1px solid ${({theme})=>theme.border};
  padding: 2.2rem 1.5rem;
  box-shadow: ${({theme})=>theme.shadow};
  max-width: 470px;
`;

const Input = styled.input`
  background: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 8px;
  padding: 0.9rem 1rem;
  font-size: 1.02rem;
  &:focus {
    outline: 2px solid ${({theme})=>theme.accent2};
  }
`;

const TextArea = styled.textarea`
  background: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 8px;
  padding: 0.9rem 1rem;
  font-size: 1.02rem;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: 2px solid ${({theme})=>theme.accent2};
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 36px;
  font-size: 1.08rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: ${({theme})=>theme.shadow};
  &:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 32px 0 ${({theme})=>theme.accent2}33;
  }
`;

const Message = styled(motion.div)`
  margin-top: 1.1rem;
  color: ${({ok, theme}) => ok ? theme.accent2 : "#f55"};
  font-weight: 500;
`;

export default function Contact() {
  const form = useRef();
  const [msg, setMsg] = useState('');
  const [ok, setOk] = useState(true);

  // CONFIGURE these with your EmailJS account
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const USER_ID = "YOUR_USER_ID"; // public key

  const sendEmail = (e) => {
    e.preventDefault();
    setMsg("");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        setMsg("Message sent! Thank you for contacting.");
        setOk(true);
        form.current.reset();
      }, (error) => {
        setMsg("Failed to send message. Try again later.");
        setOk(false);
      });
  };

  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Form ref={form} onSubmit={sendEmail} as={motion.form} initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:.7}}>
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
        {msg && <Message ok={ok} initial={{opacity:0}} animate={{opacity:1}}>{msg}</Message>}
      </Form>
    </Section>
  );
}