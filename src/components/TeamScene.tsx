'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Line, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)
  
  // 4 positions for the nodes
  const nodes = useMemo(() => [
    new THREE.Vector3(-1.8, 1.2, 0),
    new THREE.Vector3(1.8, 1.2, 0),
    new THREE.Vector3(-1.8, -1.2, 0),
    new THREE.Vector3(1.8, -1.2, 0),
  ], [])

  useFrame((state) => {
    if (groupRef.current) {
      // Continuous orbital rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Sparkles count={50} scale={5} size={2} speed={0.4} color="#00E5FF" />
      
      {/* Principal Nodes (The 4 Friends) */}
      {nodes.map((pos, i) => (
        <Float key={i} speed={3} rotationIntensity={2} floatIntensity={2} position={[pos.x, pos.y, pos.z]}>
          <Sphere args={[0.35, 32, 32]}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#00E5FF" : "#A855F7"}
              speed={4}
              distort={0.5}
              radius={1}
              emissive={i % 2 === 0 ? "#00E5FF" : "#A855F7"}
              emissiveIntensity={4}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>
          {/* Inner Core for extra glow */}
          <Sphere args={[0.15, 16, 16]}>
            <meshBasicMaterial color="#FFFFFF" />
          </Sphere>
        </Float>
      ))}

      {/* Interconnecting Lines - Form a complex web */}
      <Line
        points={[nodes[0], nodes[1], nodes[3], nodes[2], nodes[0], nodes[3], nodes[1], nodes[2]]}
        color="#00E5FF"
        lineWidth={2}
        transparent
        opacity={0.5}
      />
      <Line
        points={[nodes[0], nodes[1], nodes[2], nodes[3], nodes[0]]}
        color="#A855F7"
        lineWidth={1}
        transparent
        opacity={0.3}
      />
    </group>
  )
}

export default function TeamScene() {
  return (
    <div className="w-full h-full min-h-[450px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={3} color="#A855F7" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <NetworkNodes />
        
        <gridHelper args={[30, 15, '#00E5FF', '#0a0a0a']} rotation={[Math.PI / 2.5, 0, 0]} position={[0, -2, -4]} />
      </Canvas>
    </div>
  )
}
