import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, Disc } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '30px',
                padding: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                zIndex: 90,
                maxWidth: '300px'
            }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                background: '#333',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <Disc size={30} color="#fff" />
                </motion.div>
            </div>

            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '2px' }}>Currently Hooked to</div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Heer - Coke Studio</div>
            </div>

            <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-color)',
                    cursor: 'pointer',
                    padding: '5px'
                }}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
        </motion.div>
    );
};

export default MusicPlayer;
