import React from 'react';
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(40%);
  }
  100% {
    transform: translateY(38%);
    opacity: 1;
  }
`;

const GlowButton = styled.button`
  position: absolute;
  bottom: 25%;
  left: 55%;
  z-index: 2;
  transform: translateX(-50%);
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
  animation: ${glowAnimation} 2s ease-in-out forwards;
  animation-iteration-count: 1; /* Ensures the animation only plays once */
  box-shadow: 0 0 10px rgba(123, 206, 255, 0.7), 
              0 0 20px rgba(123, 206, 255, 0.5), 
              0 0 30px rgba(123, 206, 255, 0.3);
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(123, 206, 255, 1), 
                0 0 40px rgba(123, 206, 255, 0.8), 
                0 0 60px rgba(123, 206, 255, 0.6);
  }
`;

const ButtonImage = styled.img`
  height: 25px;
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
