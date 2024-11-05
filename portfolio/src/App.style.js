import styled from "styled-components";

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

  /* Overlay color with opacity */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(123, 206, 255, 0.4); /* 40% opacity of #7BCEFF */
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
