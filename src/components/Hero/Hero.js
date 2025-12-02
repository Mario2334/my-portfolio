import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Pic3 from '../../assets/images/Pic3.jpeg'; // Reusing existing asset

const Hero = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', width: '100%' }}>

                {/* Profile Card */}
                <motion.div
                    className="glass-card"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        border: '2px solid var(--accent-color)'
                    }}>
                        <img src={Pic3} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <h2 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Sanket Mokashi</h2>
                    <p style={{ opacity: 0.8, marginBottom: '20px' }}>Creating & capturing what I love.</p>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="https://www.linkedin.com/in/sanket-mokashi-95" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} color="var(--text-color)" />
                        </a>
                        <a href="mailto:sanket.mokashi95@gmail.com">
                            <Mail size={20} color="var(--text-color)" />
                        </a>
                    </div>
                </motion.div>

                {/* Intro Text */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(40px, 5vw, 60px)',
                        background: 'linear-gradient(to right, #fff, #999)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '20px'
                    }}>
                        Shaagird of Design
                    </h1>

                    <div style={{ opacity: 0.9, lineHeight: '1.6' }}>
                        <p style={{ marginBottom: '15px' }}>Namaste, HR's and Designers,</p>
                        <p style={{ marginBottom: '15px' }}>I'm Sanket, a Senior Software Engineer currently at Amazon Lab126.</p>
                        <p style={{ marginBottom: '15px' }}>I see the world in grids, flows, and little moments of delight.</p>
                        <p style={{ marginBottom: '15px' }}>My work blends experiences that feel simple, human, and a little bit desi.</p>
                        <p style={{ fontStyle: 'italic', color: 'var(--accent-color)' }}>
                            "Great design shouldn't need explaining, it should just click."
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
