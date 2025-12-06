import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import KeyProjects from "../KeyProjects/KeyProjects";

export let Landing = (props) => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Sidebar />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <KeyProjects />
            </motion.main>

            <MusicPlayer />

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ textAlign: 'center', padding: '40px', fontSize: '12px' }}
            >
                <p>&copy; {new Date().getFullYear()} Sanket Mokashi. Made with React & Framer Motion.</p>
            </motion.footer>
        </div>
    );
};
