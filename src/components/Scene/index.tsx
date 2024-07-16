'use client'

import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 0]} intensity={4} />
    </Canvas>
  )
}