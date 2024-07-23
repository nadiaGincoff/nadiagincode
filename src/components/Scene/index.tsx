"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useProgress, Html } from "@react-three/drei"
import { useScroll } from "framer-motion"
import NeuralNetwork from "./NeuralNetwork"
import * as THREE from 'three'

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function SceneContent() {
  const scroll = useScroll()

  useFrame((state) => {
    const scrollY = scroll.scrollY.get()
    const zoomFactor = 1 + scrollY * 0.2 // Adjust the zoom factor as needed
    const targetZ = 30 / zoomFactor

    // Smoothly interpolate the camera position
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1)
    state.camera.updateProjectionMatrix()
  })

  return (
    <>
      <directionalLight intensity={2} position={[0, 2, 4]} />
      <NeuralNetwork />
    </>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 30], zoom: 2 }}>
      {/* <directionalLight intensity={2} position={[0, 2, 4]}/>
      <NeuralNetwork /> */}

        <Suspense fallback={<Loader />}>
          <SceneContent />
        </Suspense>
    </Canvas>
  )
}