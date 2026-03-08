'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const reasons = [
  "Your beautiful smile",
  "Your caring heart",
  "Your loving nature",
  "The happiness you bring to my life",
  "The peace I feel when I am with you"
];

export default function LoveReasons() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative min-h-[100svh] py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140b15] via-rose-950 to-[#0f0a10] -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-heading text-rose-200 text-center mb-16 gold-glow"
      >
        Why I Love You
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-md flex flex-col gap-6"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveReason(activeReason === index ? null : index)}
            className={`cursor-pointer w-full p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
              activeReason === index 
                ? 'bg-rose-900/40 border-rose-400 shadow-[0_0_30px_rgba(2fb,113,133,0.3)]' 
                : 'glass-card border-white/5 hover:border-white/20'
            }`}
          >
            {/* Soft inner glow on active */}
            {activeReason === index && (
              <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-rose-500/10 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            
            <p className={`text-lg md:text-xl font-light text-center transition-colors duration-300 relative z-10 ${
              activeReason === index ? 'text-rose-100' : 'text-rose-200/70'
            }`}>
              {reason}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
