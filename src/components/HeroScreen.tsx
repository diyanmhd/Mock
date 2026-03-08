'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function HeroScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-rose-950 via-rose-900 to-[#0f0a10]"
    >
      {/* Parallax Background Gradient & Glow */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg aspect-square bg-rose-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-64 aspect-square bg-gold-400/10 blur-[100px] rounded-full" />
      </motion.div>

      {/* Floating Petals simulation (simple animated divs) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] bg-pink-300 w-3 h-3 blur-[1px]"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: '-10vh',
              rotate: 0,
            }}
            animate={{
              y: '110vh',
              rotate: 360,
              x: `${Math.random() * 100}vw`,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-10"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-rose-100 mb-4 leading-tight gold-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Happy Women&apos;s Day
          <br className="mb-2" />
          <span className="text-5xl md:text-7xl lg:text-8xl text-rose-300 block mt-2">
            Aminahiba <span className="text-3xl inline-block mt-[-20px] ml-2 align-middle text-rose-500">❤️</span>
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-rose-200/80 font-light tracking-wide mt-6 glass-card px-6 py-2 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          The most beautiful soul in my world.
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm tracking-widest text-rose-300/60 uppercase font-light">
          Open My Heart
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-rose-400 stroke-[1.5px]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
