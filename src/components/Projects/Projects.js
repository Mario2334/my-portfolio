import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Work2 from "../../assets/images/Work2.jpeg";
import WorkImage from "../../assets/images/WorkImage.jpeg";
import datahub from "../../assets/images/datahub2.png";
import swindle from "../../assets/images/swindle.jpg";

const projectsData = [
    { title: "Swindle", img: swindle, link: "https://bit.ly/3hcr4YP", desc: "Python Playground and Report Viewer Extension." },
    { title: "Job Scraper", img: WorkImage, link: "https://github.com/Mario2334/my_jobs", desc: "Automated job search tool with NLP." },
    { title: "OCR Technology", img: Work2, link: "https://github.com/Mario2334/OCR_Implementation", desc: "Identity verification using Tesseract." },
];

const Projects = () => {
    return (
        <div className="container" id="projects" style={{ padding: '80px 20px' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    fontSize: '40px',
                    marginBottom: '40px',
                    background: 'linear-gradient(to right, #ff8c00, #ff4500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                Projects
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                        </div>

                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>{project.title}</h3>
                            <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '20px', flex: 1 }}>{project.desc}</p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: 'var(--accent-color)',
                                    fontWeight: 'bold'
                                }}
                            >
                                View Project <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
