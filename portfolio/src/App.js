import './App.css';
import { BackgroundWrapper, CardContainer, VideoContainer } from './App.style';
import { Card } from './Card';
import SpotifyPlaylistEmbed from './components/SpotifyEmbed';
import { VideoPlayer } from './components/VideoComponent';
import {useState} from 'react';

function App() {
  // Create your instance
  
  const [showVideo, setShowVideo] = useState(false);
  const handleToggleToCard = () => {
    setShowVideo(false);
  };
  const handleToggleToVideo = () => {
    setShowVideo(true); // Switch to VideoPlayer component when button is clicked
  };
  // Call `initGradient` with the selector to your canvas
  return (
    <div className="App">
      <SpotifyPlaylistEmbed></SpotifyPlaylistEmbed>
      <BackgroundWrapper>
        <div className="scratch-effect" />
      </BackgroundWrapper>
      {showVideo ? (
        <VideoContainer>
          <VideoPlayer onClick={handleToggleToCard}/>
        </VideoContainer>
      ) : (
      <CardContainer>
        <Card onClick={handleToggleToVideo}/>
      </CardContainer>
      )}
    </div>
  );
}

export default App;
