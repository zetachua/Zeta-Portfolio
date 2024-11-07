import React, { useState } from 'react';
import styled from 'styled-components';
import { GlowButtonNoAnim } from './GlowButtonNoAnimation';
import { Typography, useMediaQuery,CircularProgress  } from '@mui/material';

const ButtonImage = styled.img`
    height: ${(props) => (props.ismobile ? '14px' : '22px')};
    width: ${(props) => (props.ismobile ? '14px' : '22px')};

`;

const VideoContainer = styled.div`
  position: relative;
  width:1010px;
  height:620px;
  background-size: cover;
  background-position: center;
  background-image:url('data:image/svg+xml,%3Csvg%20width%3D%221383%22%20height%3D%22868%22%20viewBox%3D%220%200%201383%20868%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221383%22%20height%3D%22868%22%20rx%3D%22100%22%20fill%3D%22%23FEFEFE%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22%20125C22%2069.7715%2066.7715%2025%20122%2025H1261C1316.23%2025%201361%2069.7715%201361%20125V680C1361%20710.928%201335.93%20736%201305%20736H1302.5C1272.95%20736%201249%20759.953%201249%20789.5V789.5C1249%20819.047%201225.05%20843%201195.5%20843H186.5C156.953%20843%20133%20819.047%20133%20789.5V789.5C133%20759.953%20109.047%20736%2079.5%20736H77.5C46.8482%20736%2022%20711.152%2022%20680.5V125Z%22%20fill%3D%22%23E9EAF4%22/%3E%3Cpath%20d%3D%22M120.438%2080.8125L116.688%2069.875H123.312L127.062%2080.8125H120.438ZM129.625%2080.8125L125.812%2069.875H132.438L136.25%2080.8125H129.625ZM132.688%2082.5625L133.562%2088.0625L118.062%20106.125L110.438%20100.188L120.438%2089.8125L95.875%2092.5625V102.125C95.875%20105.458%2096.5417%20107.812%2097.875%20109.188C99.25%20110.562%20101.625%20111.25%20105%20111.25H133.312V121.062H102.75C97.3333%20121.062%2093.1875%20119.646%2090.3125%20116.812C87.4792%20113.938%2086.0625%20109.792%2086.0625%20104.375V93.625L77.375%2094.625L75.9375%2084.875L86.0625%2083.8125V73.6875H95.875V82.75L118.438%2080.375L119.188%2082.5625H132.688ZM93.75%20155.875H132V165.688H91.875C86.5833%20165.646%2082.0625%20164.792%2078.3125%20163.125L82.0625%20153.25C85.3542%20154.958%2089.25%20155.833%2093.75%20155.875ZM120.125%20223.312C121.583%20220.146%20122.438%20216.312%20122.688%20211.812H97.625C94.7083%20219.146%2090.7917%20224.417%2085.875%20227.625L76.375%20222.875C83.6667%20217.625%2088.3542%20209.5%2090.4375%20198.5L101.5%20199.75L100.875%20201.938H134.125C134.125%20232.979%20118.708%20248.708%2087.875%20249.125L86%20239.688C97.8333%20239.271%20106.812%20236.75%20112.938%20232.125L94.8125%20226.5L99.5625%20217.438L120.125%20223.312Z%22%20fill%3D%22%23DBC2F7%22/%3E%3Cpath%20d%3D%22M144.42%20162.54C144.42%20157.42%20147.9%20154.48%20151.6%20154.48C154.56%20154.48%20156.3%20156.16%20156.3%20157.9C156.3%20159%20155.7%20159.7%20154.64%20160.04C155.56%20160.66%20156.2%20161.68%20156.2%20163.1C156.2%20165.36%20154.4%20166.82%20152.28%20166.82C150.22%20166.82%20148.36%20165.24%20148.36%20163.02C148.36%20161.7%20148.98%20160.78%20149.8%20160.18L148.56%20160.18L148.56%20158.88L152.88%20158.88C154.02%20158.88%20155.08%20158.8%20155.08%20157.78C155.08%20156.56%20153.6%20155.72%20151.6%20155.72C148.2%20155.72%20145.48%20158.42%20145.48%20162.54C145.48%20166.6%20148.26%20169.56%20152.32%20169.56C156.48%20169.56%20159.08%20166.38%20159.08%20162.82C159.08%20160.64%20158.2%20159.34%20157.76%20158.86L158.68%20158.08C159.44%20159.02%20160.16%20160.54%20160.16%20162.82C160.16%20167.5%20156.78%20170.8%20152.32%20170.8C147.86%20170.8%20144.42%20167.52%20144.42%20162.54ZM154.74%20162.72C154.74%20161.08%20153.4%20160.26%20152.28%20160.26C150.9%20160.26%20149.84%20161.36%20149.84%20162.72C149.84%20164.02%20150.82%20165.16%20152.28%20165.16C153.74%20165.16%20154.74%20164.12%20154.74%20162.72Z%22%20fill%3D%22%23DBC2F7%22/%3E%3C/svg%3E');
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Tablet-specific background */
  @media (max-width: 1050px) {
    width: 311px;
    height: 500px;
    border-radius: 50px;
    background-color: #fff;
    background-image: none;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #7bceff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #55a3d4;
  }

  &.left {
    top: 89%;
    left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.ismobile ? '35px' : '45px')};
    width: ${(props) => (props.ismobile ? '35px' : '45px')};
    align-self: center;
    border: 1px solid #DBC2F7;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 6px 4px 1px 0px #DBC2F7;
    border-radius: 50px;
    background-color: #fff;
    transform: translate(-3px, -3px);
  }

  &.left:hover {
  box-shadow: 5px 4px 1px 0px #DBC2F7;
  transform: translate(2px, 2px);
}

  &.left:active {
    box-shadow: none;
    transform: translate(4px, 4px);
  } 

  &.right {
    top: 89%;
    right: 25px;
     display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.ismobile ? '35px' : '45px')};
    width: ${(props) => (props.ismobile ? '35px' : '45px')};
    align-self: center;
    border: 1px solid #DBC2F7;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 6px 4px 1px 0px #DBC2F7;
    border-radius: 50px;
    background-color: #fff;
    transform: translate(-3px, -3px);
  }
    &.right:hover {
  box-shadow: 5px 4px 1px 0px #DBC2F7;
  transform: translate(2px, 2px);
}

  &.right:active {
    box-shadow: none;
    transform: translate(4px, 4px);
  } 
`;

const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;


const ZetaLogo = styled.img`
  width: ${(props) => (props.ismobile ? '68px' : '77px')};
  height: ${(props) => (props.ismobile ? '21px' : '24px')};
  position: absolute;
  bottom: ${(props) => (props.ismobile ? '3%' : '4%')};
  margin: auto;
  z-index: 10;
`;
// Styling for spinner overlay
const SpinnerOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50px;
  width: 400px; 
  height:400px; 
  margin:auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  @media (max-width: 1050px) {
    width:270px;
    height:340px;
    margin-top:2.7rem;
    border-radius:20px;
;  }
`;


const PlaceholderImage = styled.img`
  width: ${(props) => (props.ismobile ? '271px' : '401px')};
  height: ${(props) => (props.ismobile ? '341px' : '401px')};
  border-radius: 20px;
  object-fit: cover;
  margin-top:-1.9rem;
  z-index: 3;
  transition: opacity 0.5s ease;
  position: absolute;
  display: ${(props) => (props.loading? 'block' : 'none')};

  @media (max-width: 1050px) {
        margin-top:-2.7rem;
    }
`;

// VideoPlayer component
export function VideoPlayer({ onClick }) {
  const matches1050 = useMediaQuery('(max-width:1050px)');
  
  const videos = [
    {
      position: '1',
      url: process.env.PUBLIC_URL + "/Unity AR Metaverse.mp4",
      title: "Unity AR Metaverse Game",
      description: "Immersive AR experiences in a metaverse environment.",
      placeholder: process.env.PUBLIC_URL + "/metaverse.jpg"

    },
    {
      position: '2',
      url: process.env.PUBLIC_URL + "/Unity AR Web3 Game.mp4",
      title: "Unity AR Web3 Game",
      description: "Combines augmented reality with blockchain integration.",
      placeholder: process.env.PUBLIC_URL + "/winfinity.png"
    },
    {
      position: '3',
      url: process.env.PUBLIC_URL + "/Unity VR Oculus Visually Impaired Simulation.mov",
      title: "Unity VR Simulation for Visually Impaired",
      description: "Accessible VR experience developed for Oculus using Unity.",
      placeholder: process.env.PUBLIC_URL + "/visualimpair.jpg"
    },
    {
      position: '4',
      url: process.env.PUBLIC_URL + "/Unity WebGL Tensorflow Motion Capture.mov",
      title: "Unity WebGL TensorFlow Motion Capture",
      description: "Real-time motion capture in a browser with Unity and TensorFlow.",
      placeholder: process.env.PUBLIC_URL + "/motioncapture.jpg"
    },
    {
      position: '5',
      url: process.env.PUBLIC_URL + "/Unity WebGL Typing Game.mov",
      title: "Unity WebGL Typing Game",
      description: "Educational typing game offering interactive gameplay online.",
      placeholder: process.env.PUBLIC_URL + "/typinggame.jpg"
    },
    {
      position: '6',
      url: process.env.PUBLIC_URL + "/Web AR Tesla Model S AR ScreenRecord.mp4",
      title: "Web AR Tesla Model S",
      description: "Web-based AR experience featuring the Tesla Model S.",
      placeholder: process.env.PUBLIC_URL + "/webar.png"
    },
    {
      position: '7',
      url: process.env.PUBLIC_URL + "/Web3 Frontend Software Engineer.mov",
      title: "Web3 Frontend Project",
      description: "Frontend project with decentralized app functionality for Web3.",
      placeholder: process.env.PUBLIC_URL + "/mementomori.jpg"
    },
    {
      position: '8',
      url: process.env.PUBLIC_URL + "/Reactjs Frontend Social Media Website.mp4",
      title: "React.js Social Media Website",
      description: "Frontend project for a social media site using React.js.",
      placeholder: process.env.PUBLIC_URL + "/reactjsocial.jpg"
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [loading, setLoading] = useState(true);

 
  const handleNext = () => {
    setLoading(true);  // Set loading to true when switching videos
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setLoading(true);  // Set loading to true when switching videos
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const rightArrow = process.env.PUBLIC_URL + "/rightArrow.png";
  const zetaLogo = process.env.PUBLIC_URL + "/zetaNintendoLogo.png";

  return (
    <VideoContainer>
      {loading && (
        <SpinnerOverlay>
          <CircularProgress color="white" />
        </SpinnerOverlay>
      )}
    
      <GlowButtonNoAnim onClick={onClick} />
      <Button className="left" ismobile={matches1050} onClick={handlePrevious}>
        <ButtonImage style={{ transform: 'rotate(180deg)' }} src={rightArrow} alt="Next Video" />
      </Button>

      <VideoDescriptionContainer>
        <PlaceholderImage
          src={videos[currentVideo].placeholder}
          alt="Loading..."
          loading={loading}
          ismobile={matches1050}
        >
        </PlaceholderImage>
        <video 
          onLoadedData={() => setLoading(false)}
          muted controls playsinline loop src={videos[currentVideo].url} style={{ width: matches1050?'270px':'400px', zIndex:'1', height:matches1050? '340px':'400px', borderRadius: '20px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="caption" fontFamily={'MadeTommy'} style={{ color: '#000', fontSize: '12px' }}>
            {videos[currentVideo].position}. {videos[currentVideo].title}
          </Typography>
          <Typography variant="caption" fontFamily={'MadeTommyLight'} style={{ color: '#000', width: matches1050?'250px':'400px', fontSize: '11px' }}>
            {videos[currentVideo].description}
          </Typography>
        </div>
      </VideoDescriptionContainer>
      <ZetaLogo ismobile={matches1050} src={zetaLogo} alt="zeta logo" />

      <Button className="right" ismobile={matches1050} onClick={handleNext}>
        <ButtonImage src={rightArrow} alt="Next Video" />
      </Button>
    </VideoContainer>
  );
}
