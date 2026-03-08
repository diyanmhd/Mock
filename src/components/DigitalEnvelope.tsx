'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterContent = `My Dearest Aminahiba,

From the very first moment I saw you in college, something inside me felt different. I may not remember the exact day, but I will always remember that feeling. It was the moment I realized that you were someone special.

What I love most about you is the love you have for me. The way you care, the way you stay with me, and the way your mood becomes so happy whenever we are together.

You are beautiful, caring, and the most loving person in my life. Your smile can brighten even my darkest days. Your eyes have a calmness that I could look at forever. And lately, even your hair has become one of the things I admire so much.

One of my favorite memories with you is when I rested my head on your lap and we talked about everything and nothing at the same time.

That moment felt peaceful and perfect.

Aminahiba, I truly love you very much.

And whenever I call you my  “Penninghlleeeeh,” it always brings a smile to my heart.

Happy Women’s Day my love.

Forever yours.`;

export default function DigitalEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 bg-[#140b15]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="flex flex-col items-center w-full">
          {!isOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-rose-200/60 font-light mb-8 animate-pulse text-sm uppercase tracking-widest"
            >
              Tap to Open
            </motion.p>
          )}

          {/* Envelope Container */}
          <motion.div
            layout
            onClick={() => !isOpen && setIsOpen(true)}
            className={`relative w-full aspect-[4/3] max-w-[400px] cursor-pointer ${
              isOpen ? 'cursor-default h-auto min-h-[500px] aspect-auto' : ''
            }`}
            animate={{
              scale: isOpen ? 1 : [1, 1.02, 1],
            }}
            transition={{
              scale: {
                repeat: isOpen ? 0 : Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            {/* The Envelope back/flap (CSS styling) */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  key="envelope-closed"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-rose-900 border border-gold-400/30 rounded-lg shadow-2xl flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/20 border border-gold-300 flex items-center justify-center text-gold-300 font-heading text-2xl">
                    A
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Letter inside */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="letter-open"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full bg-[#fdfaf6] p-6 sm:p-8 md:p-10 rounded-sm shadow-2xl relative"
                  style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper.png")' }}
                >
                  <TypewriterText text={letterContent} delay={0.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Typewriter Effect Component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Initial delay
    if (currentIndex === 0) {
      timeoutId = setTimeout(() => {
        setCurrentIndex(1);
        setDisplayedText(text[0]);
      }, delay * 1000);
      return () => clearTimeout(timeoutId);
    }

    if (currentIndex < text.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35); // typewriter speed
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, text, delay]);

  return (
    <div className="text-[#3b2c2f] font-body text-[15px] sm:text-[16px] leading-relaxed whitespace-pre-wrap">
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-rose-400 ml-1 animate-pulse align-middle" />
    </div>
  );
}
