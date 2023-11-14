'use client'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/underconstruction.json'

export default function Project() {
  return (
    <div className='flex items-center justify-center w-full mt-20'>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 400, height: 400 }}
      >
      </Lottie>
    </div>
  )
}