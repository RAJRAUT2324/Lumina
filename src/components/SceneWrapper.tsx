'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrthographicCamera } from '@react-three/drei'
import NeuralMesh from './NeuralMesh'

export default function SceneWrapper() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full">
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={80} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <NeuralMesh />
        </Float>
      </Canvas>
    </div>
  )
}
