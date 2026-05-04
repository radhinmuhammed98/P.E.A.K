'use client';

import { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, MeshReflectorMaterial, Html, useProgress, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-peak-gold/20 border-t-peak-gold rounded-full animate-spin mb-4" />
        <span className="text-peak-gold text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

function CarModel({ color }: { color?: string }) {
  const { scene } = useGLTF('/models/car.glb');

  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial;
          mat.envMapIntensity = 2.5; // Boost HDR reflections
          mat.needsUpdate = true;

          const matName = mat.name.toLowerCase();
          // Heuristic to find the car body material and make it look like luxury automotive paint
          if (matName.includes('body') || matName.includes('paint') || matName.includes('car') || matName.includes('shell')) {
            if (color) mat.color = new THREE.Color(color);
            mat.metalness = 0.8;
            mat.roughness = 0.15;
            
            // Add clearcoat if the material supports it
            if ('clearcoat' in mat) {
              (mat as THREE.MeshPhysicalMaterial).clearcoat = 1.0;
              (mat as THREE.MeshPhysicalMaterial).clearcoatRoughness = 0.05;
            }
          }
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

// Preload the model to improve performance when returning to this view
useGLTF.preload('/models/car.glb');

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={0.2}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#e5e5e5"
        metalness={0.5}
        mirror={0.7}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const meshRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#c6a769"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GSAPAnimator({ carGroupRef, triggerSelector }: { carGroupRef: React.RefObject<THREE.Group>, triggerSelector: string }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!carGroupRef.current || !triggerSelector) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerSelector,
          start: "top top",
          end: "bottom bottom", // Entire 400vh container
          scrub: true, // Smooth sync
        }
      });

      // Phase 1: Car Introduction (0% - 25%)
      // Hold the initial beautiful angle
      tl.to({}, { duration: 1 });

      // Phase 2: Rotation Focus (25% - 50%)
      // Show off the sculpted aerodynamics
      tl.to(carGroupRef.current.rotation, {
        y: Math.PI, 
        ease: 'power2.inOut',
        duration: 1
      });

      // Phase 3: Zoom into details (50% - 75%)
      // Intimate product reveal
      tl.to(camera.position, {
        x: 3.5,
        y: 1.2,
        z: 4.5,
        ease: 'power2.inOut',
        duration: 1
      });

      // Phase 4: Full reveal (75% - 100%)
      // Rotate to 270 degrees and pull camera back slightly for the finale
      tl.to(carGroupRef.current.rotation, {
        y: Math.PI * 1.5,
        ease: 'power2.inOut',
        duration: 1
      }, "reveal");
      
      tl.to(camera.position, {
        x: 4.5,
        y: 1.8,
        z: 5.5,
        ease: 'power2.inOut',
        duration: 1
      }, "reveal");
    });

    return () => ctx.revert();
  }, [carGroupRef, camera, triggerSelector]);

  return null;
}

interface CarViewerProps {
  color?: string;
  interactive?: boolean;
  minimal?: boolean;
  scrollTriggerSelector?: string;
}

export default function CarViewer({ color = '#1a1a2e', interactive = true, minimal = false, scrollTriggerSelector = 'body' }: CarViewerProps) {
  const carGroupRef = useRef<THREE.Group>(null);

  return (
    <Canvas
      camera={{ position: [5, 2, 6], fov: 45 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      
      {/* Soft directional light for highlights */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="#ffffff"
      />
      
      {/* Backlight for rim lighting effect */}
      <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#c6a769" />

      <Suspense fallback={<Loader />}>
        {/* The model is centered and appropriately sized by default, but we can wrap it in a group if needed */}
        <group ref={carGroupRef} position={[0, 0, 0]}>
          <CarModel color={color} />
          {/* Soft contact shadow grounded immediately beneath the car */}
          <ContactShadows
            position={[0, 0.01, 0]}
            opacity={0.8}
            scale={10}
            blur={2.5}
            far={2}
            resolution={1024}
            color="#000000"
          />
        </group>
        {/* Environment setup for realistic reflections - Studio gives great automotive specular highlights */}
        <Environment preset="studio" environmentIntensity={1.5} />
      </Suspense>

      {!minimal && <GSAPAnimator carGroupRef={carGroupRef} triggerSelector={scrollTriggerSelector} />}

      {/* OrbitControls for smooth rotation */}
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.5} // Slow speed for a premium showroom feel
        enableDamping={true}
        enableZoom={false}
        enablePan={false}
        target={[0, 0.5, 0]} // Target slightly above ground to keep car centered nicely
      />

      {!minimal && <Ground />}
      {!minimal && <ParticleField />}

      {/* Fog */}
      <fog attach="fog" args={['#f2f2f4', 15, 30]} />
    </Canvas>
  );
}
