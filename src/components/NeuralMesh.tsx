'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NeuralMesh() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Create an icy/glassy material
  const material = new THREE.MeshPhysicalMaterial({
    color: '#B39DDB',
    emissive: '#00E5FF',
    emissiveIntensity: 0.2,
    roughness: 0.1,
    metalness: 0.8,
    transmission: 0.9,
    thickness: 1.5,
    ior: 1.5,
    wireframe: true,
  })

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Slow base rotation
    meshRef.current.rotation.y += 0.002
    meshRef.current.rotation.x += 0.001

    // Follow mouse smoothly
    const targetX = (state.pointer.x * Math.PI) / 10
    const targetY = (state.pointer.y * Math.PI) / 10

    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.05
    
    // Bobbing effect
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <group ref={meshRef}>
      <mesh material={material}>
        <icosahedronGeometry args={[2, 2]} />
      </mesh>
      <mesh material={material} scale={[1.2, 1.2, 1.2]}>
        <icosahedronGeometry args={[2, 1]} />
      </mesh>
    </group>
  )
}
