import React from 'react';
import { Home, Folder, Linkedin, Mail, Github, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Home', href: '#home' },
        { icon: Folder, label: 'Projects', href: '#projects' },
        { icon: Code, label: 'Skills', href: '#skills' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanket-mokashi-95' }, // Assuming LinkedIn URL from context or generic
        { icon: Github, label: 'GitHub', href: 'https://github.com/Mario2334' },
        { icon: Mail, label: 'Contact', href: '#contact' },
    ];

    return (
        <motion.div
            className="glass-card"
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                padding: '10px 20px',
                display: 'flex',
                gap: '20px',
                borderRadius: '50px'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {navItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    style={{
                        color: 'var(--text-color)',
                        opacity: 0.7,
                        transition: 'opacity 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                    <item.icon size={20} />
                </a>
            ))}
        </motion.div>
    );
};

export default Sidebar;
