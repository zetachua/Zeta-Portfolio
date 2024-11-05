import React, { useEffect, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Icons for play and pause

const SpotifyPlaylistEmbed = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  useEffect(() => {
    const handleIframeLoad = () => {
      console.log('Spotify play button clicked!');
    };

    const iframe = document.getElementById('spotify-iframe');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);
  useEffect(() => {
    const iframe = document.getElementById('spotify-iframe');
    if (iframe) {
      const spotifyEmbedWindow = iframe.contentWindow;

      // Function to play or pause Spotify based on the `play` state
      const controlSpotifyPlayback = () => {
        spotifyEmbedWindow.postMessage(
          { command: isPlaying ? 'play' : 'pause' },
          '*'
        );
      };

      // Control Spotify playback on component mount
      controlSpotifyPlayback();

      return () => {
        spotifyEmbedWindow.postMessage(
          { command: 'pause' }, // Always pause when unmounting
          '*'
        );
      };
    }
  }, [isPlaying]); // React on changes to `play`


  // Toggle play/pause
  const handlePlayPause = () => {
      setIsPlaying(!isPlaying); // Toggle play state
  };

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      {/* Play/Pause Button */}
      <button onClick={handlePlayPause} style={{ 
          position: 'absolute', 
          right: '0.5rem', 
          top: '1rem', 
          zIndex: '1001', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer' 
      }}>
        {isPlaying ? <FaVolumeMute size={24} color="#fff" /> : <FaVolumeUp size={24} color="#fff" />}
      </button>

      <iframe
        id="spotify-iframe"
        style={{
          borderRadius: '12px',
          zIndex:'100',
          backgroundColor:'transparent',
          border:'none',
          position:'absolute',
          width: '1px', // Keeps iframe visually hidden
          height: '1px', // Keeps iframe visually hidden
        }}
        src="https://open.spotify.com/embed/playlist/0ZdPuykypS243HegTRCg7P?utm_source=generator" // Default playlist
        allowFullScreen
        autoPlay
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      />
    </div>
  );
};

export default SpotifyPlaylistEmbed;
