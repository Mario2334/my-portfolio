import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
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
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '40px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <div style={{ position: 'relative', marginBottom: '25px' }}>
                        {/* Glowing Background */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '-10px',
                            right: '-10px',
                            bottom: '-10px',
                            background: 'linear-gradient(45deg, #ff8c00, #ff0080, #40e0d0)',
                            borderRadius: '50%',
                            filter: 'blur(20px)',
                            opacity: 0.5,
                            zIndex: 0
                        }}></div>

                        {/* Image Container with Gradient Border */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%', // Circle shape
                                padding: '5px', // Space for border
                                background: 'linear-gradient(45deg, #ff8c00, #ff0080)',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                        >
                            <img
                                src={Pic3}
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    border: '4px solid #1a1a1a' // Inner border to separate image from gradient
                                }}
                            />
                        </motion.div>
                    </div>

                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right, #fff, #ccc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '10px',
                        letterSpacing: '1px'
                    }}>
                        Sanket Mokashi
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '25px',
                        fontSize: '16px',
                        fontWeight: '300',
                        letterSpacing: '0.5px'
                    }}>
                        Creating & capturing what I love.
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <motion.a
                            whileHover={{ scale: 1.2, color: '#0077b5' }}
                            href="https://www.linkedin.com/in/sanket-mokashi-it-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}
                        >
                            <Linkedin size={24} color="var(--text-color)" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, color: '#ea4335' }}
                            href="mailto:sanketm221995@gmail.com"
                            style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}
                        >
                            <Mail size={24} color="var(--text-color)" />
                        </motion.a>
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
                        Senior Software Developer
                    </h1>

                    <div style={{ opacity: 0.9, lineHeight: '1.6' }}>
                        <p style={{ marginBottom: '15px' }}>
                            Experienced Team Lead and Software Architect with over 8 years of expertise in designing, developing, and delivering scalable web and backend solutions using Python, Java, and C++.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Proven track record in leading cross-functional teams in Agile environments, architecting robust systems, and implementing frameworks like Flask, FastAPI, and Spring Boot to power high-performance applications.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Adept at end-to-end project ownership—from requirement gathering and architecture design to deployment and optimization—while ensuring clean, maintainable, and secure code.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Skilled in cloud-native architectures leveraging AWS services, integrating AI/LLM-powered features, building RAG pipelines leveraging MCP server for resolving support tickets and building automation pipelines for data-intensive workflows.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
