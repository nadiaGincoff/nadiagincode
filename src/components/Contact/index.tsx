import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { useState } from 'react';
import Toast from '../../common/Toast';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    const [showToast, setShowToast] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText('nadia.gincoff@gmail.com');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            sizes="100vw"
                            src={`/images/profile-picture-.jpg`}
                            />
                        </div>
                        <h2>Let&apos;s work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded 
                            backgroundColor={"#025a4e"} 
                            className={styles.button} 
                            onClick={() => window.open('https://www.linkedin.com/in/nadia-ginc/', '_blank')}
                        >
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <>
                        
                        <Rounded onClick={handleEmailClick}>
                            <p>nadia.gincoff@gmail.com</p>
                            {showToast ? 
                                <div className='z-50 ml-5'>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-spin'>
                                        <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#ede7de"/>
                                        <path d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z" fill="#ede7de"/>
                                    </svg>
                                </div>
                            : null}
                        </Rounded>
                    </>
                </div>
                <div className={styles.info}>
                    <div>
                    </div>
                    <div>
                        <h3>socials</h3>
    
                        <Magnetic>
                            <div onClick={() => window.open('https://github.com/nadiaGincoff/', '_blank')}>
                                <p>GitHub</p>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div onClick={() => window.open('https://www.linkedin.com/in/nadia-ginc/', '_blank')}>
                                <p>Linkedin</p>
                            </div>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

