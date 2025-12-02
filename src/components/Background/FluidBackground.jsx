import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                overflow: 'hidden',
                background: '#020202', // Ultra dark background
            }}
        >
            {/* SVG Filter for Gooey Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'url(#goo)', // Apply the gooey filter
                    opacity: 0.8,
                }}
            >
                {/* Blob 1 - Deep Burnt Orange */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 25, // Slower for liquid feel
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '45vw',
                        height: '45vw',
                        background: '#4a1c00', // Deep burnt orange
                        borderRadius: '50%',
                    }}
                />

                {/* Blob 2 - Dark Red/Brown */}
                <motion.div
                    animate={{
                        x: [0, -100, 50, 0],
                        y: [0, 50, -100, 0],
                        scale: [1, 1.1, 0.8, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '10%',
                        width: '55vw',
                        height: '55vw',
                        background: '#331000', // Very dark brown
                        borderRadius: '50%',
                    }}
                />

                {/* Blob 3 - Accent Dark Orange */}
                <motion.div
                    animate={{
                        x: [0, 150, -150, 0],
                        y: [0, 100, -100, 0],
                        scale: [1, 1.3, 0.7, 1],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 5,
                    }}
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '40%',
                        width: '35vw',
                        height: '35vw',
                        background: '#5e2a00', // Dark amber
                        borderRadius: '50%',
                    }}
                />
            </div>

            {/* Noise Overlay for Texture */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
                    opacity: 0.04,
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default FluidBackground;
