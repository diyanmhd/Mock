'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Surprise() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-24 px-6 bg-[#140b15]">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,rgba(15,10,16,1)_70%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg min-h-[300px]">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.button
              key="button"
              onClick={() => setIsRevealed(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              className="px-8 py-4 rounded-full bg-rose-500/20 border border-rose-400/50 text-rose-100 font-heading text-xl md:text-2xl shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:shadow-[0_0_50px_rgba(244,63,94,0.5)] transition-shadow duration-300 flex items-center gap-3 backdrop-blur-sm"
            >
              Tap for a Surprise <span className="text-rose-400">❤️</span>
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading text-rose-200 leading-relaxed gold-glow">
                “You are not just special today.
                <br className="my-4" />
                <span className="text-rose-400 text-glow">
                  You are special every day of my life.”
                </span>
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Hearts Confetti */}
      <AnimatePresence>
        {isRevealed && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                initial={{
                  y: "110vh",
                  x: `${(Math.random() - 0.5) * 100}vw`,
                  opacity: 0,
                  scale: Math.random() * 0.5 + 0.5,
                  rotate: Math.random() * 360
                }}
                animate={{
                  y: "-10vh",
                  x: `${(Math.random() - 0.5) * 100}vw`,
                  opacity: [0, 1, 1, 0],
                  rotate: Math.random() * 360 + 180
                }}
                transition={{
                  duration: Math.random() * 4 + 4,
                  ease: "easeOut",
                  delay: Math.random() * 1.5
                }}
                className="absolute bottom-0 text-rose-500 blur-[1px]"
                style={{ fontSize: `${Math.random() * 20 + 20}px` }}
              >
                ❤️
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
