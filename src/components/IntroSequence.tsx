'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface IntroProps {
  onEnter: () => void;
  isPlaying: boolean;
  toggleAudio: () => void;
}

interface Particle {
  x: number;
  y: number;
  duration: number;
  moveY: number;
}

export default function IntroSequence({ onEnter, isPlaying, toggleAudio }: IntroProps) {
  const [phase, setPhase] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 2500);
    const timer2 = setTimeout(() => setPhase(2), 5500);
    const timer3 = setTimeout(() => setPhase(3), 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Generate particles AFTER mount (fixes hydration issue)
  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 5 + 5,
      moveY: Math.random() * -200,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0a10] text-rose-100 overflow-hidden">

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-rose-300 rounded-full opacity-50"
          initial={{ x: p.x, y: p.y }}
          animate={{
            y: [p.y, p.y + p.moveY],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center min-h-[300px]">

        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg md:text-xl font-light tracking-wide mb-8 text-rose-200"
          >
            For someone truly special...
          </motion.p>
        )}

        {phase >= 2 && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-heading text-rose-300 tracking-wider py-4"
          >
            Aminahiba
          </motion.h1>
        )}

        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <button
              onClick={onEnter}
              className="px-8 py-3 rounded-full border border-rose-400/50 text-rose-300 hover:bg-rose-400/10 transition-all duration-300 tracking-widest text-sm uppercase"
            >
              Enter
            </button>

            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 text-xs text-rose-200/60 hover:text-rose-200 transition-colors"
            >
              {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{isPlaying ? 'Music On' : 'Music Off'}</span>
            </button>

          </motion.div>
        )}

      </div>
    </div>
  );
}