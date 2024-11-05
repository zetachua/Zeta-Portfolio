import React, { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Icons for play and pause

const SpotifyPlaylistEmbed = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const [embedController, setEmbedController] = useState(null); // Store the Spotify embed controller

  useEffect(() => {
    // Initialize the Spotify IFrame API
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById('spotify-iframe');
      let options = {
        uri: 'https://open.spotify.com/embed/playlist/0ZdPuykypS243HegTRCg7P?utm_source=generator'
      };

      let callback = (EmbedController) => {
        setEmbedController(EmbedController); // Store the controller for later use
      };

      IFrameAPI.createController(element, options, callback);
    };
  }, []);

  // Toggle play/pause
  const handlePlayPause = () => {
    if (embedController) {
      if (isPlaying) {
        embedController.pause(); // Pause the music
      } else {
        embedController.play(); // Play the music
      }
      setIsPlaying(!isPlaying); // Toggle play state
    }
  };

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      {/* Play/Pause Button */}
      <button onClick={handlePlayPause} style={{ 
          position: 'absolute', 
          right: '0.5rem', 
          top: '0rem', 
          zIndex: '1001', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer' 
      }}>
        {isPlaying ? <FaPause size={24} color="#1DB954" /> : <FaPlay size={24} color="#1DB954" />}
      </button>

      {/* Spotify iframe (hidden) */}
      <iframe
        id="spotify-iframe"
        style={{
          borderRadius: '12px',
          border: '0',
          width: '1px', // Keeps iframe visually hidden
          height: '1px', // Keeps iframe visually hidden
          transform: 'scale(0.005)',
          position: 'absolute',
          top: '-50%',
        }}
        src="https://open.spotify.com/embed/playlist/0ZdPuykypS243HegTRCg7P?utm_source=generator" // Default playlist
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      />
    </div>
  );
};

export default SpotifyPlaylistEmbed;
