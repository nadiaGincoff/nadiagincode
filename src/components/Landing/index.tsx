'use client'
import dynamic from 'next/dynamic';
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

const Scene = dynamic(() => import('../../components/Scene'), {
  ssr: false,
});

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const directionRef = useRef(direction);
  const velocityFactor = 0.05;
  
  useLayoutEffect( () => {
    directionRef.current = direction;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => directionRef.current = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [direction])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += velocityFactor * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Nadia Gincoff -</p>
          <p ref={secondText}>Nadia Gincoff -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p className='text-[#ede7de]'>♦</p>
        <p>Full Stack Developer</p>
      </div>
      <div className={styles.scene}>
        <Scene />
      </div>
    </motion.main>
  )
} 