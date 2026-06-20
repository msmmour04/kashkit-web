'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// A slowly-distorting glassy icosahedron in the brand red, drifting gently.
// Light, premium, and unmistakably "designed" — not stock asset feel.
function Blob() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t * 0.18) * 0.25;
      mesh.current.rotation.y = t * 0.22;
    }
  });
  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.3}>
      <mesh ref={mesh} scale={1.45}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#E7352C"
          speed={1.4}
          distort={0.42}
          roughness={0.15}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  );
}

// Soft secondary sphere — companion shape, much smaller, drifts behind.
function Companion() {
  return (
    <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[1.8, -0.6, -1.2]} scale={0.55}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.35} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 38 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-4, -3, 2]} intensity={0.6} color="#F59E0B" />
        <Blob />
        <Companion />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
