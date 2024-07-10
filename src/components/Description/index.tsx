import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function Description() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const phrase = "Develop accessible, inclusive web products and digital experiences. My expertise spans front-end, back-end, email, and databases, reflecting my versatile skill set.";
   
    return (
        <div ref={ref} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={inView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={inView ? "open" : "closed"}>Skilled in JavaScript, React, Node.js, TypeScript, MySQL, Sequelize, sqlite, Postgresql, AWS and many more. Passionate about tech&apos;s impact on lives. </motion.p>
            </div>
        </div>
    )
}