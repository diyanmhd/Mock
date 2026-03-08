'use client';

import { useState, useRef, useEffect } from 'react';
import IntroSequence from '@/components/IntroSequence';
import HeroScreen from '@/components/HeroScreen';
import DigitalEnvelope from '@/components/DigitalEnvelope';
import LoveReasons from '@/components/LoveReasons';
import MemoryMoment from '@/components/MemoryMoment';
import Constellation from '@/components/Constellation';
import Tribute from '@/components/Tribute';
import Surprise from '@/components/Surprise';
import FinalScreen from '@/components/FinalScreen';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0;
    
    audio.play().then(() => {
      setIsPlaying(true);

      // Smooth fade in
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.6) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }).catch(() => {});
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      startMusic();
    }
  };

  const handleEnter = () => {
    setHasEntered(true);

    setTimeout(() => {
      startMusic();
    }, 300);

    window.scrollTo(0, 0);
  };

  return (
    <main className="bg-[#0f0a10] min-h-screen text-rose-50 w-full overflow-x-hidden">

      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="auto"
      />

      {!hasEntered ? (
        <IntroSequence
          onEnter={handleEnter}
          isPlaying={isPlaying}
          toggleAudio={toggleAudio}
        />
      ) : (
        <>
          <HeroScreen />
          <DigitalEnvelope />
          <LoveReasons />
          <MemoryMoment />
          <Constellation />
          <Tribute />
          <Surprise />
          <FinalScreen />

          <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-rose-950/50 text-rose-300"
          >
            {isPlaying ? "🔊" : "🔇"}
          </button>
        </>
      )}
    </main>
  );
}