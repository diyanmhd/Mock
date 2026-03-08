'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Points for the constellation "A M I N A H I B A"
// Roughly laid out in 3D space simulating a connected line mesh
const points: [number, number, number][] = [
  [-8, 2, 0], [-6, 4, -1], [-4, 1, 0], // A
  [-3, 2, -1], [-2, 4, -2], [-1, 2, -1], [0, 4, 0], [1, 2, -1], // M
  [2, 3, 0], [2, 1, -1], // I
  [3, 1, 0], [4, 4, -1], [5, 1, 0], // N
  [6, 2, 0], [7, 4, -1], [8, 1, 0], // A
  [9, 4, 0], [9, 1, -1], [10, 2, 0], [11, 4, -1], // H
  [12, 3, 0], [12, 1, -1], // I
  [13, 1, 0], [13, 4, -1], [14, 2, 0], [15, 4, -1], [15, 1, 0], // B
  [16, 2, 0], [17, 4, -1], [18, 1, 0], // A
];

// Normalize the points to center them
const cx = points.reduce((acc, p) => acc + p[0], 0) / points.length;
const normalizedPoints: [number, number, number][] = points.map(p => [(p[0] - cx) * 0.5, p[1] * 0.5 - 1, p[2] * 2]);

function ConstellationLine() {
  const lineRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (lineRef.current) {
      // Gentle breathing rotation
      lineRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      lineRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={lineRef}>
      <Line
        points={normalizedPoints}
        color="#fcd34d"
        lineWidth={1.5}
        dashed={true}
        dashSize={0.5}
        dashScale={2}
        dashOffset={0}
        transparent
        opacity={0.6}
      />
      {normalizedPoints.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#fcd34d" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function Constellation() {
  return (
    <section className="relative h-[100svh] w-full bg-[#0a0608] overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Canvas Context */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <fog attach="fog" args={['#0a0608', 5, 20]} />
          <Stars radius={50} depth={50} count={2000} factor={4} saturation={0.5} fade speed={1} />
          <ConstellationLine />
        </Canvas>
      </div>

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.5 }}
        className="relative z-10 pointer-events-none flex flex-col items-center mt-32"
      >
        <div className="glass-card px-8 py-4 rounded-full bg-black/40 backdrop-blur-md">
          <h3 className="text-xl md:text-3xl font-heading text-gold-300 tracking-[0.3em] gold-glow uppercase">
            Aminahiba
          </h3>
        </div>
        <p className="text-rose-200/50 text-sm mt-4 font-light tracking-wide">
          Written in the stars
        </p>
      </motion.div>
    </section>
  );
}
