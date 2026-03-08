'use client';

import { motion } from 'framer-motion';

export default function MemoryMoment() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-24 px-6 bg-[#0f0a10]">
      {/* Soft glowing background glow behind silhouette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gold-500/10 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-[300px] mb-12 relative"
      >
        {/* SVG Silhouette representation (two people sitting together) */}
        <div className="aspect-[4/3] w-full bg-gradient-to-t from-transparent via-[#fdf8f5]/5 to-transparent rounded-full flex items-end justify-center pb-8 opacity-80 backdrop-blur-sm border-b border-rose-500/20">
            <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[180px] h-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                {/* Simplified poetic shapes for two figures leaning */}
                <path d="M70,140 Q70,90 90,80 Q105,70 110,90 Q115,110 130,140 Z" fill="url(#sil-grad-1)" />
                <path d="M100,120 Q110,80 130,75 Q145,70 145,95 Q145,120 160,140 Z" fill="url(#sil-grad-2)" />
                <circle cx="100" cy="65" r="18" fill="url(#sil-grad-1)" />
                <circle cx="130" cy="60" r="15" fill="url(#sil-grad-2)" />
                <defs>
                    <linearGradient id="sil-grad-1" x1="100" y1="47" x2="100" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f3e8ff" />
                        <stop offset="1" stopColor="#0f0a10" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="sil-grad-2" x1="135" y1="45" x2="135" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fecdd3" />
                        <stop offset="1" stopColor="#0f0a10" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        {/* Little floating particles near silhouettes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gold-300 rounded-full w-1 h-1 shadow-[0_0_5px_#fcd34d]"
            initial={{
              x: 100 + (Math.random() * 100 - 50),
              y: 80 + (Math.random() * 50),
              opacity: 0,
            }}
            animate={{
              y: [null, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center max-w-md px-6 relative z-10"
      >
        <p className="text-xl md:text-2xl font-body font-light text-rose-200 leading-relaxed italic">
          “One of my favorite moments —
          <br className="mb-2" />
          resting my head on your lap and talking about everything.”
        </p>
      </motion.div>
    </section>
  );
}
