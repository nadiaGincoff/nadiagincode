'use client';
import React from 'react'
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';

interface ProjectProps {
    index: number;
    title: string;
    manageModal: (active: boolean, index: number, x: number, y: number) => void;
    href: string;
}

export default function Project({ index, title, manageModal, href }: ProjectProps) {
    const router = useRouter();

    const handleRedirect = (url: string) => {
        router.push(url);
    };

    return (
        <div 
            onClick={() => handleRedirect(href)} 
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} 
            className={styles.project}
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}