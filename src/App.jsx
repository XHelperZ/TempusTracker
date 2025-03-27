import { useState, useRef } from 'react';
import TempusTracker from './components/TempusTracker';
import './App.css';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // ASS ASS ASS, just let me play my fucking music from the start holy hell who needs jumpscare protection? Screamers still work, fuck you.
  const startMusicOnInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play(); 
      audioRef.current.muted = false;  
      setIsMusicPlaying(true);  
    }
  };

  return (
    <div
      style={{ height: '100vh' }}
      onClick={startMusicOnInteraction}
    >
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        muted={true} 
        style={{ display: 'none' }} 
      >
        <source src="./Amazing_Plan.mp3" type="audio/mp3" />
        Your browser does not support the audio element.e
      </audio>

      {/* Content */}
      <h1>Is Tempus Still down?</h1>
      <TempusTracker />
      <sub>Servers up? Fuck you they are fake. No bloody ranked, no bloody timer, it's all in yer bloody head mate.</sub>
    </div>
  );
}

export default App;
