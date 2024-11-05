import React from 'react';
import styled,{keyframes} from 'styled-components';


const bobbing = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
`;

const GlowButton = styled.button`
  position: absolute;
  top: -1%;
  left: -1%;
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
  animation: ${bobbing} 5s ease-in-out 1s infinite;
  box-shadow: 0 0 10px rgba(123, 206, 255, 0.7), 
              0 0 20px rgba(123, 206, 255, 0.5), 
              0 0 30px rgba(123, 206, 255, 0.3);
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(123, 206, 255, 1), 
                0 0 40px rgba(123, 206, 255, 0.8), 
                0 0 60px rgba(123, 206, 255, 0.6);
  }

    @media (max-width: 768px) {
      top: -3%;
      left: -4%;
    }
`;

const ButtonImage = styled.img`
  height: 28px;
  object-fit: contain;
  transform:rotate(180deg);
`;

export function GlowButtonNoAnim({ onClick }) {
  const glowButton = process.env.PUBLIC_URL + "/glowButton.png";
  return (
    <GlowButton onClick={onClick}> 
      <ButtonImage src={glowButton} alt="Button Icon" />
    </GlowButton>
  );
}
