import React, { useState } from 'react';
import styled from 'styled-components';
import { GlowButtonNoAnim } from './GlowButtonNoAnimation';
import { Typography } from '@mui/material';

const ButtonImage = styled.img`
  width: 30px; /* Adjust size as needed */
  height: 30px;
`;

// Styled components
const VideoContainer = styled.div`
  position: relative;
  width:893px;
  height: 560px;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%221383%22%20height%3D%22868%22%20viewBox%3D%220%200%201383%20868%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221383%22%20height%3D%22868%22%20rx%3D%22100%22%20fill%3D%22%23FEFEFE%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22%20125C22%2069.7715%2066.7715%2025%20122%2025H1261C1316.23%2025%201361%2069.7715%201361%20125V654.5C1361%20690.675%201331.67%20720%201295.5%20720H1291.5C1257.53%20720%201230%20747.534%201230%20781.5V781.5C1230%20815.466%201202.47%20843%201168.5%20843H213.5C179.534%20843%20152%20815.466%20152%20781.5V781.5C152%20747.534%20124.466%20720%2090.5%20720H87C51.1015%20720%2022%20690.899%2022%20655V125Z%22%20fill%3D%22%23E9EAF4%22/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;


  /* Tablet-specific background */
  @media (max-width: 768px) {
    width:311px;
    height:500px;
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22539%22%20height%3D%22868%22%20viewBox%3D%220%200%20539%20868%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%20100C0%2044.7715%2044.7715%200%20100%200H439C494.228%200%20539%2044.7715%20539%20100V768C539%20823.228%20494.228%20868%20439%20868H100C44.7715%20868%200%20823.228%200%20768V100Z%22%20fill%3D%22%23FEFEFE%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.173%2097C19.5185%2097%2012%20103.345%2012%20112V112V704C12%20731.614%2034.3858%20754%2062%20754H75C102.614%20754%20125%20776.386%20125%20804V806C125%20833.614%20147.386%20856%20175%20856H364C391.614%20856%20414%20833.614%20414%20806V804C414%20776.386%20436.386%20754%20464%20754H477C504.614%20754%20527%20731.614%20527%20704V112C527%2056.7715%20482.229%2012%20427%2012H112V12C98.4038%2012%2089%2024.2663%2089%2037.8624V56.2211C89%2078.7427%2070.7427%2097%2048.2211%2097H28.173Z%22%20fill%3D%22%23E9EAF4%22/%3E%3C/svg%3E");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const VideoFrame = styled.video`
  width: 250px;
  height: 300px;
  margin-top:-2rem;
  border-radius:50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #7BCEFF;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #55A3D4;
  }

  &.left {
  top:94%;
    left: 15px;
  }

  &.right {
    top:94%;
    right: 15px;
  }
`;
const VideoDescriptionContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  gap:1rem;
`;
// VideoPlayer component
export function VideoPlayer({onClick}) {
    const videos = [
        {
          position:'1',
          url: process.env.PUBLIC_URL + "/Unity AR Metaverse.mp4",
          title: "Unity AR Metaverse Game",
          description: "Immersive AR experiences in a metaverse environment."
        },
        {
            position:'2',
          url: process.env.PUBLIC_URL + "/Unity AR Web3 Game.mp4",
          title: "Unity AR Web3 Game",
          description: "Combines augmented reality with blockchain integration."
        },
        {
            position:'3',
          url: process.env.PUBLIC_URL + "/Unity VR Oculus Visually Impaired Simulation.mov",
          title: "Unity VR Simulation for Visually Impaired",
          description: "Accessible VR experience developed for Oculus using Unity."
        },
        {
            position:'4',
          url: process.env.PUBLIC_URL + "/Unity WebGL Tensorflow Motion Capture.mov",
          title: "Unity WebGL TensorFlow Motion Capture",
          description: "Real-time motion capture in a browser with Unity and TensorFlow."
        },
        {
            position:'5',
          url: process.env.PUBLIC_URL + "/Unity WebGL Typing Game.mov",
          title: "Unity WebGL Typing Game",
          description: "Educational typing game offering interactive gameplay online."
        },
        {
            position:'6',
          url: process.env.PUBLIC_URL + "/Web AR Tesla Model S AR ScreenRecord.mp4",
          title: "Web AR Tesla Model S",
          description: "Web-based AR experience featuring the Tesla Model S."
        },
        {
            position:'7',
          url: process.env.PUBLIC_URL + "/Web3 Frontend Software Engineer.mov",
          title: "Web3 Frontend Project",
          description: "Frontend project with decentralized app functionality for Web3."
        },
        {
            position:'8',
          url: process.env.PUBLIC_URL + "/Reactjs Frontend Social Media Website.mp4",
          title: "React.js Social Media Website",
          description: "Frontend project for a social media site using React.js."
        }
      ];
      
      
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };
  

  const rightArrow= process.env.PUBLIC_URL + "/rightArrow.png"
  return (
    <VideoContainer>
    <GlowButtonNoAnim onClick={onClick}  />
    <Button className="left" onClick={handlePrevious}>
        <ButtonImage style={{transform:'rotate(180deg)'}} src={rightArrow} alt="Next Video" />
      </Button>
      
      <VideoDescriptionContainer>
        <VideoFrame autoPlay src={videos[currentVideo].url} />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Typography variant="caption" fontFamily={'MadeTommy'} style={{color:'#000',fontSize:'12px'}}>{videos[currentVideo].position}. {videos[currentVideo].title}</Typography>
            <Typography variant="caption" fontFamily={'MadeTommyLight'} style={{color:'#000',width:'250px',fontSize:'12px'}}>{videos[currentVideo].description}</Typography>
        </div>
     </VideoDescriptionContainer>

      <Button className="right" onClick={handleNext}>
        <ButtonImage src={rightArrow} alt="Next Video" />
      </Button>
    </VideoContainer>
  );
}
