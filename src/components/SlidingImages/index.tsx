import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import { FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";

const slider1 = [
    {
        color: "#e1dad6",
        icon: <FaNode className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--darkgray)" />
    },
    {
        color: "#d6d7dc",
        icon: <RiReactjsFill className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--secondary)" />
    },
    {
        color: "var(--beige)",
        icon: <SiTypescript className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--darkgreen)" />
    },
    {
        color: "var(--beige)",
        icon: <SiGit className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--secondary)" />
    }
]

const slider2 = [
    {
        color: "var(--color-bg2)",
        icon: <SiTailwindcss className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--secondary)" />
    },
    {       
        color: "#e5e0e1",
        icon: <SiMysql className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--secondary)" />
    },
    {
        color: "var(--darkgray)",
        icon: <SiFirebase className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--beige)" />
    },
    {
        color: "#e1dad6",
        icon: <SiMongodb className='sm:text-5xl md:text-[10rem] lg:text-[20rem]' color="var(--darkgreen)" />
    },
    
]

export default function SlidingImages() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                {
                    slider1.map( (project, index) => {
                        return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                            <div className={styles.imageContainer}>
                                {project.icon}
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className={styles.slider}>
                {
                    slider2.map( (project, index) => {
                        return <div key={index} className={styles.project} style={{backgroundColor: project.color}}>
                            <div key={index} className={styles.imageContainer}>
                                {project.icon}
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}