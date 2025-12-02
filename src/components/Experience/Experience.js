import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Senior Software Engineer",
        company: "Amazon Lab126, Bengaluru, India",
        period: "2023-07 - Current",
        description: [
            "Implemented Data aggregation tool which saves documents to s3 which will act as Amazon Q data source. The tool extracts data from the confluence, Jira, Wiki and Quip docs",
            "Implemented RAG pipeline using Langflow integrating MCP server to take action on EC2 action tickets reducing support tickets for manual intervention by 40%. Implemented this Langflow pipeline using bedrock, custom MCP server for executing commands, prompts templates to better execute the commands and understand the support tickets.",
            "Worked on implementing a LLM chatbot that will act as a knowledge centre for internal teams for their design and development. This application is used by 50k users daily for their knowledge repository. This chatbot uses claude 3.5 and 3.7 with knowledge repository which is a vector DB",
            "Led Injury Database team for building tool which helped design tech team to improve product on past data for injuries and fatalities due to products. I developed Frontend in React as well as Django",
            "Product development, Client communication, Systems design, Cloud services, Docker, Node JS",
            "I worked on implementing infrastructure for event-based architecture and added data reconciliation.",
            "Implemented a device monitoring system for detecting device temperature and humidity.",
            "Implemented microservices in Python and java with MySQL Aurora as a database.",
            "Implemented infrastructure using CDK and created auto CI/CD pipelines for these microservices.",
            "Promoted technical leadership to entry-level and junior engineers in complex enterprise system environment.",
            "Coordinated with other engineers to evaluate and improve software and hardware interfaces."
        ]
    },
    {
        role: "Technical Lead",
        company: "Leo 1, Mumbai, India",
        period: "2022-10 - 2023-06",
        description: [
            "Led two teams for delivering payment services and fund management service for NBFC.",
            "Implemented React components with tailwind and converted python monolithic services to microservices",
            "Responsible for development for real time value transactions service which is built on django and airflow",
            "Responsible for moving all services from monolithic to micro services",
            "Brought new ideas on using tools and frameworks to support micro service architecture and facilitated internal tools using retool",
            "Managed team performance by training, mentoring, disciplining, and motivating employees.",
            "Supervised end-user support efforts, designing policies to establish consistent service guidelines and reliable ticket resolution.",
            "Implemented, configured, and optimized safety standards.",
            "Commissioned third-party vendors and technicians to augment on-site technical support assets."
        ]
    },
    {
        role: "Technical Lead (Contract)",
        company: "Pakama athletics gmbh, Remote",
        period: "2021-02 - 2022-09",
        description: [
            "Implemented and developed Backend Architecture for fitness platform which had Java, Kotlin, Spring Boot , rust , postgresql and vue cms as tech stack",
            "Used AWS Platform to serve 10k users , I deployed the application using docker, lambda , ECS and RDS implementation for rapid scaling",
            "Implemented features for Kotlin and Swift Fitness App like integrating firebase dynamic links , calendar export for class scheduling",
            "Implemented Event Based Architecture for Notifications using lambda function and rust",
            "Created Telegram bot to implement fitness related queries using python ."
        ]
    },
    {
        role: "Senior Software Developer(Lead)",
        company: "Decision Minds Pvt Ltd, Milpitas, CA",
        period: "2019-11 - 2022-02",
        description: [
            "Implemented and Developed Log aggregation tool to get logs and analyze status and realtime log analysis with anomaly detection using kafka , elk and NLP.",
            "Developed and Owned Event based Architecture and implementation to monitor resources on PAAS platform Like Aws and Azure. Created the application for Western Union using Django, Kafka and Postgresql",
            "Responsible for developing Scalable Enterprise Applications from Scratch for clients like SendSafely, First Tech, Vmware and Western Union.",
            "Implemented Retool dashboards for customer success managers for better understanding of customer insights and pain points of users",
            "Involved in building Database Migration Application capable of migrating a over 100s gbs of data while you are sipping 🍵",
            "Leading a Team For Full Stack Development on Tech React, Django and Postgres",
            "Follow Scrum and ability to handle team using jira."
        ]
    },
    {
        role: "Senior Software Developer(Contractor) Lead Developer(Contractor)",
        company: "Remote",
        period: "2019-04 - 2019-10",
        description: [
            "Developed E-Commerce application for delivering in django, Angular and Postgres..",
            "Demonstrated Ability to lead a remote using scrum",
            "Contributed Over Full Stack and was central part of handling the product"
        ]
    },
    {
        role: "Lead Software Developer(Contractor)",
        company: "Studytact Pvt Ltd",
        period: "2018-10 - 2019-04",
        description: [
            "Developed django application with video content sharing capability and Managed the application for content sharing."
        ]
    },
    {
        role: "Software Developer(Contractor)",
        company: "MServ Technologies Private Limited",
        period: "2018-08 - 2018-09",
        description: [
            "Tasked with developing django application and improving the application."
        ]
    },
    {
        role: "Team Lead/ Back End Developer",
        company: "Repusight Pvt Ltd",
        period: "2017-08 - 2018-08",
        description: [
            "Backend development of repusight. Leading a team on web development . I working on technologies like no sql, mongodb , python , flask , javascript , angular js, Natural language processing."
        ]
    },
    {
        role: "Data Sciences Intern",
        company: "Gyandhan",
        period: "2017-03 - 2017-05",
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
