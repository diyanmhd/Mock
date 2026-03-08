'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FinalScreen() {
  return (
    <section className="relative h-[60svh] w-full flex flex-col items-center justify-center bg-[#0a0608] border-t border-rose-950/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-rose-500 fill-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
        </motion.div>
        
        <p className="text-xl md:text-2xl font-light tracking-widest text-rose-200/80 uppercase">
          Made with love
          <br className="mb-2" />
          <span className="text-rose-100 font-heading tracking-normal normal-case block mt-2 text-2xl md:text-4xl text-glow center text-center">
            for Aminahiba.
          </span>
        </p>
      </motion.div>

      {/* Subtle particle scatter */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gold-400 rounded-full w-1 h-1 shadow-[0_0_8px_#fbbf24] opacity-50"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 60}vh`,
          }}
          animate={{
            y: [null, `${Math.random() * -20}vh`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </section>
  );
}
