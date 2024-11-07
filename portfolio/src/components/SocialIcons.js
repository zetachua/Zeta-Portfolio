import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animations for floating, bobbing, and fading with rotation
const floatUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const bobbing = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
`;

const fadeInRotate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  animation: ${floatUp} 1s ease-out forwards, ${bobbing} 5s ease-in-out 1s infinite;
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  transform: scale(0.9);
  top: 5%;
  left: 5%;

  @media (max-width: 1050px) {
    top: 2%;
    left: 8%;
  }
`;

const IconLink = styled.a`
  transition: color 0.2s ease;
  z-index: 100;
  margin-bottom: 8px;
  animation: ${fadeInRotate} 4s ease-out infinite;
  
  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
`;

export function SocialIcons() {
  const instagramIcon = process.env.PUBLIC_URL + "/instagramIcon.png";
  const linkedinIcon = process.env.PUBLIC_URL + "/linkedinIcon.png";
  const githubIcon = process.env.PUBLIC_URL + "/githubIcon.png";
  
  return (
    <IconContainer>
      <IconLink href="https://www.instagram.com/zetachua" target="_blank" rel="noopener noreferrer">
        <IconImage src={instagramIcon} alt="Instagram" />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/zeta-chua-0786101a9/" target="_blank" rel="noopener noreferrer">
        <IconImage src={linkedinIcon} alt="Linkedin" />
      </IconLink>
      <IconLink href="https://github.com/zetachua" target="_blank" rel="noopener noreferrer">
        <IconImage src={githubIcon} alt="Github" />
      </IconLink>
    </IconContainer>
  );
}
