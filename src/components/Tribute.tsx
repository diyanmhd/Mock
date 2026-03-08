'use client';

import { motion } from 'framer-motion';

export default function Tribute() {
  return (
    <section className="relative min-h-[70svh] flex flex-col items-center justify-center overflow-hidden py-24 px-6 bg-gradient-to-t from-[#1a0b12] to-[#0a0608]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-2xl text-center relative z-10"
      >
        <div className="absolute -inset-10 bg-rose-500/5 blur-[100px] rounded-full -z-10" />
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-rose-100 leading-relaxed gold-glow px-4">
          “Strong women inspire the world.
          <br className="my-4 hidden md:block" />
          <span className="text-3xl md:text-5xl lg:text-6xl text-gold-300 block mt-6 text-glow">
            Aminahiba, you inspire mine.”
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
