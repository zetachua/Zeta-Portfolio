import React from 'react';
import styled, { keyframes } from 'styled-components';

const bobbing = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
`;

const glowAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0.3;
  }
  50% {
    opacity: 1;
    transform: translateY(80%);
  }
  100% {
    transform: translateY(10%);
    opacity: 1;
  }
`;

const GlowButton = styled.button`
  position: absolute;
  bottom: 25%;
  left: 60%;
  z-index: 2;
  width: 60px;
  height: 60px;
  font-size: 1rem;
  color: #fff;
  background-color: #7BCEFF;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  animation: ${glowAnimation} 2s ease-in-out forwards,${bobbing} 5s ease-in-out 1s infinite;
  box-shadow: 0 0 10px rgba(123, 206, 255, 0.7), 
              0 0 20px rgba(123, 206, 255, 0.5), 
              0 0 30px rgba(123, 206, 255, 0.3);
  transition: box-shadow 1s ease-in-out forwards;

  &:hover {
    box-shadow: 0 0 20px rgba(123, 206, 255, 1), 
                0 0 40px rgba(123, 206, 255, 0.8), 
                0 0 60px rgba(123, 206, 255, 0.6);
  }
`;

const ButtonImage = styled.img`
  height:28px;
  object-fit: contain;
`;

export function AnimatedGlowButton({ onClick }) {
  const glowButton = process.env.PUBLIC_URL + "/glowButton.png";
  return (
    <GlowButton onClick={onClick}> 
      <ButtonImage src={glowButton} alt="Button Icon" />
    </GlowButton>
  );
}
