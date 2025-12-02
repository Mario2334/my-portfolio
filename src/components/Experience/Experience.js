import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Senior Software Engineer",
        company: "Amazon Lab126, Bengaluru, India",
        period: "Current",
        description: [
            "Led India team to implement product integrity and LLM applications for performance and reliability on amazon devices.",
            "Implemented data pipelines for ingesting documents from Confluence , MySQL server and WIKI pages to serve as a datasource to Amazon Q LLM model.",
            "Responsible for development for real time value transactions service.",
            "Worked on implementing infrastructure for implementing event based architecture and added data reconciliation.",
            "Implemented device monitoring system for detecting device temperature and humidity. Implemented microservices in python and java with mysql aurora as database.",
            "Implemented infrastructure using cdk and created auto CICD pipelines for these microservices.",
            "Promoted technical leadership to entry-level and junior engineers in complex enterprise system environment.",
            "Coordinated with other engineers to evaluate and improve software and hardware interfaces"
        ]
    },
    {
        role: "Technical Lead",
        company: "Leo1, Mumbai, India",
        period: "June 2023",
        description: [
            "Led two teams for delivering payment services and fund management service for NBFC.",
            "Responsible for development for real time value transactions service.",
            "Responsible for moving all services from monolithic to micro services",
            "Brought new ideas on using tools and frameworks to support micro service architecture and facilitated internal tools using retool",
            "Managed team performance by training, mentoring, disciplining, and motivating employees",
            "Supervised end-user support efforts, designing policies to establish consistent service guidelines and reliable ticket resolution."
        ]
    },
    {
        role: "Technical Lead(Contract)",
        company: "Pakama athletics gmbh",
        period: "Current",
        description: [
            "Implemented and developed Backend Architecture for fitness platform which had Java, Kotlin, Spring Boot, Rust, Postgresql and Vue CMS as tech stack.",
            "Used AWS Platform to serve 10k users , I deployed the application using docker, lambda , ECS and RDS implementation for rapid scaling",
            "Implemented features for Kotlin and Swift Fitness App like integrating firebase dynamic links , calendar export for class scheduling",
            "Implemented Event Based Architecture for Notifications using lambda function and rust",
            "Leading a Team For Full Stack Development on Tech React, Django and Postgres",
            "Created Telegram bot to implement fitness related queries using python."
        ]
    },
    {
        role: "Senior Software developer(Lead)",
        company: "Decision Minds",
        period: "February 2022",
        description: [
            "Implemented and Developed Log aggregation tool to get logs and analyze status and realtime log analysis with anomaly detection using kafka , elk and NLP.",
            "Developed and Owned Event based Architecture and implementation to monitor resources on PAAS Skills platform Like Aws and Azure. Created the application for Western Union",
            "Responsible for developing Scalable Enterprise Applications from Scratch for clients like SendSafely, Excellent First Tech, Vmware and Western Union",
            "Involved in building Database Migration Application capable of migrating a over 100s gbs of data while Excellent you are sipping ☕",
            "Leading a Team For Full Stack Development on Tech React, Django and Postgres",
            "Follow Scrum and ability to handle team using jira."
        ]
    },
    {
        role: "Senior Software developer(Lead)",
        company: "Uberry Switzerland",
        period: "October 2019",
        description: [
            "Developed E-Commerce application for delivering in django, Angular and Postgres..",
            "Demonstrated Ability to lead a remote using scrum",
            "Contributed Over Full Stack and was central part of handling the product"
        ]
    },
    {
        role: "Lead Software Developer(Contractor)",
        company: "Studytact Pvt Ltd",
        period: "April 2019",
        description: [
            "Developed django application with video content sharing capability and Managed the application for content sharing."
        ]
    },
    {
        role: "Software Developer(Contractor)",
        company: "mServ Technologies Private Limited",
        period: "September 2018",
        description: [
            "Tasked with developing django application and improving the application."
        ]
    },
    {
        role: "Team Lead/ back end developer",
        company: "Repusight Pvt Ltd",
        period: "Aug 2017",
        description: [
            "Backend development of repusight. Leading a team on web development . I working on technologies like no sql, mongodb , python , flask , javascript , angular js, Natural language processing"
        ]
    },
    {
        role: "Data Sciences",
        company: "Gyandhan",
        period: "May 2017",
        description: [
            "Scraping linkedIn to get required information and scrape facebook with nltk to extract meaning from the comments"
        ]
    }
];

const Experience = () => {
    return (
        <div className="container" id="experience" style={{ padding: '100px 20px' }}>
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
                Experience
            </motion.h2>

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'none', // Hidden on mobile, shown on desktop via media query if needed, but for now keeping simple
                }} />

                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            marginBottom: '60px',
                            position: 'relative',
                            paddingLeft: '0', // Adjusted for mobile-first
                        }}
                    >
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '30px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px', gap: '10px' }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '24px',
                                        color: 'var(--accent-color)',
                                        marginBottom: '5px'
                                    }}>
                                        {item.role}
                                    </h3>
                                    <h4 style={{
                                        fontSize: '18px',
                                        color: 'var(--text-color)',
                                        opacity: 0.9
                                    }}>
                                        {item.company}
                                    </h4>
                                </div>
                                <span style={{
                                    fontSize: '14px',
                                    color: 'var(--text-secondary)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    height: 'fit-content'
                                }}>
                                    {item.period}
                                </span>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {item.description.map((desc, i) => (
                                    <li key={i} style={{
                                        marginBottom: '10px',
                                        color: 'var(--text-secondary)',
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{
                                            color: 'var(--accent-color)',
                                            marginRight: '10px',
                                            marginTop: '5px'
                                        }}>▹</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
