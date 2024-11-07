import styled, { keyframes } from 'styled-components';

const grainAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-1%, -1%); }
  20% { transform: translate(1%, 1%); }
  30% { transform: translate(-2%, -2%); }
  40% { transform: translate(3%, 3%); }
  50% { transform: translate(-3%, -3%); }
  60% { transform: translate(4%, 4%); }
  70% { transform: translate(-4%, -4%); }
  80% { transform: translate(2%, 2%); }
  90% { transform: translate(-3%, -3%); }
`;

const scratchAnimation = keyframes`
  0%, 100% { transform: translateX(0); opacity: 0.5; }
  10% { transform: translateX(-1%); }
  20% { transform: translateX(1%); }
  30% { transform: translateX(-2%); opacity: 0.75; }
  40% { transform: translateX(3%); }
  50% { transform: translateX(-3%); opacity: 0.5; }
  60% { transform: translateX(8%); }
  70% { transform: translateX(-3%); }
  80% { transform: translateX(10%); opacity: 0.25; }
  90% { transform: translateX(-2%); }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + '/CyberpunkBg.png'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: blur(2px);

  /* Overlay color with opacity */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 41, 65, 0.25); /* Overlay color */
    z-index: 1;
  }

  /* Enhanced Grainy Noise Layer */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-conic-gradient(from 0deg, rgba(0, 0, 0, 0.05) 0%, transparent 0.1%, transparent 1%), 
      repeating-conic-gradient(from 45deg, rgba(0, 0, 0, 0.05) 0%, transparent 0.1%, transparent 2%), 
      repeating-radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 3px 3px, 4px 4px, 6px 6px; /* Adjust for denser noise */
    opacity: 0.3; /* Increase opacity for visibility */
    filter: drop-shadow(0px 0px 1px black);
    animation: ${grainAnimation} 0.5s steps(1) infinite;
    z-index: 2;
    pointer-events: none;
  }

  /* Scratch effect */
  & .scratch-effect {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 120%;
    height: 100%;
    opacity: 0.5;
    background: repeating-linear-gradient(90deg, #0002 0 2px, transparent 4px 37vmin);
    animation: ${scratchAnimation} 2s infinite;
    z-index: 3;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1; /* Ensures it stays above the background */
`;


export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1; /* Ensures it stays above the background */
`;
