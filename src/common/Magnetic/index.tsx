import React, { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap';

interface MagneticProps {
    children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
    const magnetic = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentMagnetic = magnetic.current;
        if (!currentMagnetic) return;

        // Create GSAP animation functions for x and y properties
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

         // Handle mouse move event
        const handleMouseMove = (e: MouseEvent) => {
            if (!currentMagnetic) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = currentMagnetic.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        // Handle mouse leave event
        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        // Add event listenerss
        currentMagnetic.addEventListener("mousemove", handleMouseMove);
        currentMagnetic.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            if (currentMagnetic) {
                currentMagnetic.removeEventListener("mousemove", handleMouseMove);
                currentMagnetic.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [children]);

    return React.cloneElement(children as React.ReactElement, { ref: magnetic });
}
