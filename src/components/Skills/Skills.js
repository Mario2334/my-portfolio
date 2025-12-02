import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming languages", skills: [
            { name: "Python", level: 90 },
            { name: "Rust", level: 80 },
            { name: "Java", level: 70 },
            { name: "HTML", level: 100 },
            { name: "Javascript", level: 80 },
            { name: "SASS/LESS", level: 60 },
            { name: "Mysql", level: 80 },
            { name: "Nosql", level: 100 },
        ]
    },
    {
        category: "Frameworks", skills: [
            { name: "Flask/Django", level: 90 },
            { name: "React JS", level: 80 },
            { name: "Node JS", level: 70 },
            { name: "Agile", level: 80 },
        ]
    },
    {
        category: "Languages", skills: [
            { name: "English (Fluent)", level: 100 },
            { name: "Hindi(Fluent)", level: 100 },
        ]
    }
];

const Skills = () => {
    return (
        <div className="container" id="skills" style={{ padding: '100px 20px' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    fontSize: '40px',
                    marginBottom: '80px',
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '1px'
                }}
            >
                Skills
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
                {skillsData.map((category, catIndex) => (
                    <div key={catIndex}>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            style={{
                                color: 'var(--accent-color)',
                                marginBottom: '30px',
                                fontSize: '24px',
                                borderLeft: '4px solid var(--accent-color)',
                                paddingLeft: '15px'
                            }}
                        >
                            {category.category}
                        </motion.h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            {category.skills.map((skill, index) => (
                                <div key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: 'var(--text-color)',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{skill.level}%</span>
                                    </div>
                                    <div style={{
                                        height: '12px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        backdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            style={{
                                                height: '100%',
                                                background: 'linear-gradient(90deg, var(--accent-color), #ff8c00)',
                                                borderRadius: '10px',
                                                boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
                                                position: 'relative'
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
                                                borderRadius: '10px'
                                            }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
