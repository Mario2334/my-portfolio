import React, { useState } from 'react';
import { motion } from 'framer-motion';

const keyProjectsData = [
    {
        title: "Amazon Labs126",
        role: "Senior Software Developer",
        client: "Amazon Labs126",
        description: [
            "Developed and deployed a secure document ingestion system that used AWS Glue and Athena for indexing and querying metadata at scale.",
            "Created automation scripts using Python and AWS SDKs for monitoring service health and alerting teams in real time.",
            "Integrated internal services with Amazon Q for contextual retrieval-augmented generation (RAG) to improve response relevance.",
            "Led cross-functional design reviews and adopted design tokens and UI standardization practices across 3 internal tools.",
            "Technologies & Tools: Java, Spring Boot, React, Kafka, AWS (Lambda, SNS, SQS, Cognito, Fargate, ECS, EKS), DynamoDB, PostgreSQL, Terraform, Docker, Kubernetes"
        ]
    },
    {
        title: "Leo1 Payment Platform",
        role: "Senior Software Developer",
        client: "Leo1",
        description: [
            "Description: A student-focused fintech and academic services platform allowing digital fee payments, credit management, and academic performance tracking.",
            "Designed a financial reporting engine that generated daily, weekly, and monthly insights for compliance and audit teams.",
            "Led OAuth2-based authentication service implementation across microservices.",
            "Created a plug-and-play analytics dashboard using Retool integrated with event logs for NBFC stakeholders.",
            "Conducted API performance benchmarking and introduced caching strategies that improved response time by 40%.",
            "Technologies & Tools: Django, React, PostgreSQL, Redis, Apache airflow, AWS S3, Celery, Jenkins, Docker, GitLab CI/CD"
        ]
    },
    {
        title: "Pakama Fitness",
        role: "Senior Software Developer",
        client: "Pakama App",
        description: [
            "Description: A smart fitness platform that provides customized workout plans, tracks equipment usage, and integrates with wearable devices. Uses AI/ML to recommend routines and prevent injuries.",
            "Designed the workout recommendation engine using Rust, tuned with user activity data and past preferences.",
            "Implemented mobile notifications with timezone-aware scheduling using Firebase Cloud Messaging (FCM).",
            "Deployed a fitness data pipeline that ingested wearable device data and performed daily aggregations on AWS using Lambda + Kinesis.",
            "Used GitHub Actions for CI/CD and container vulnerability scanning, improving overall security posture.",
            "Technologies & Tools: Springboot, Rust, Firebase, React Native, PostgreSQL, AWS , Docker, GitHub Actions"
        ]
    },
    {
        title: "Cloud Ops",
        role: "Senior Software Developer",
        client: "Western Union",
        description: [
            "Description: A cloud monitoring tool which monitors EC2, RDS, IAM and Route 53 resources. This application gives analysis, realtime monitoring and cost saving recommendation for a particular resource.",
            "Proposed Backend Architecture for implementing Multi Account Multi Region application.",
            "Implemented Multi Region Resource consolidation service, which gets resource data from various regions into a single source database.",
            "Implemented Event Driven Architecture so that database is consistent with the AWS Resources.",
            "Implemented Node Rest API, Database Design and Added JWT Authentication.",
            "Created Docker containers for individual Services.",
            "Technologies & Tools: Node, Java, Kotlin , React ,Postgresql, AWS, Event Bridges , CloudWatch , Lambda Functions , EC2 , RDS , IAM , Route53 , Webstorm"
        ]
    },
    {
        title: "Hubble",
        role: "Senior Software Developer",
        client: "Vmware",
        description: [
            "Description: Log aggregation and analysis tool for Informatica and jobs running at isolation. Provides comprehensive details like anomaly detection, recommended actions, overdue jobs and ETA.",
            "Was responsible for building this application using django and spring boot with mysql as database.",
            "Implemented ELK stack for indexing logs on the logstash and further analysis. Implemented dynamic filebeat configuration to get file logs from various sources.",
            "Implemented Kafka Producer and Consumer services.",
            "Created Topic Partition flow for distributed jobs.",
            "Implemented Authentication using SSO and CSRF hand shaking for better security.",
            "Created docker services for each component of the platform.",
            "Implemented deployment using kubernetes for prod , stage and dev servers.",
            "Technologies & Tools: Django, Java, Kotlin, Python , Spring Boot , Kafka , ELK , Filebeat , Mysql, docker , kubernetes , load balancer, camunda"
        ]
    },
    {
        title: "Tesseract Workspace",
        role: "Senior Software Developer",
        client: "Vmware",
        description: [
            "Description: All Inclusive workspace for Vmware internal apps to accelerate productivity and easier access through a single platform.",
            "Proposed Backend architecture and was responsible for building this application using django and spring boot with mysql as database.",
            "Implemented Authentication using SSO and CSRF hand shaking for better security.",
            "Created docker services for each component of the platform.",
            "Implemented deployment using kubernetes for prod , stage and dev servers.",
            "Technologies & Tools: Django , Spring Boot , Kafka , ELK , Filebeat , Mysql, docker , kubernetes , load balancer, camunda"
        ]
    },
    {
        title: "Datahub",
        role: "Senior Software Developer",
        client: "Decision Minds",
        description: [
            "Description: Data Migration Tool for migrating RDBMS to Snowflake. This tool solves complex migration process in a simple pipeline and without code.",
            "Orchestrated Architecture for this application, Helped Designing System for this application.",
            "Full Stack Contribution to application. Setup Base for Django as well as React App.",
            "Created Scripts for Standalone Picking up migrations and running individually. This is used in Kubernetes Environment.",
            "Led a team for building UI from scratch. Created individual components , css and implemented design patterns for this application.",
            "Deployed this application in GCP and implemented Storage in S3 and snowflake in AWS.",
            "Implemented Jenkins Pipeline for React as well as Django.",
            "Technologies & Tools: Django, React ,Postgresql, AWS, GCP , Jenkins , Pycharm"
        ]
    },
    {
        title: "Success4",
        role: "Senior Software Developer",
        client: "Decision Minds",
        description: [
            "Description: A Customer Success Management tool for companies who have lots of Data but doesn't have the resource to effectively implement an insight machine which helps them drive sales and save cost.",
            "Built Features like Data feed which takes lot of API and saves the data in the database.",
            "Created a Data ingest tool for Snowflake.",
            "Implemented Spinnaker for deployment.",
            "Fixed Critical Bugs faced during deployment.",
            "Developed Client (Send Safely , First Tech) Specific Features.",
            "Technologies & Tools: Django, Angular ,Postgresql, AWS, Terraform , Spinnaker, Pycharm"
        ]
    }
];

const KeyProjects = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <div className="container" id="key-projects" style={{ padding: '100px 20px' }}>
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
                Key Projects
            </motion.h2>

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                {keyProjectsData.slice(0, showAll ? keyProjectsData.length : 3).map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            marginBottom: '60px',
                            position: 'relative',
                            paddingLeft: '0',
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
                                        {item.title}
                                    </h3>
                                    <h4 style={{
                                        fontSize: '18px',
                                        color: 'var(--text-color)',
                                        opacity: 0.9
                                    }}>
                                        {item.role} {item.client && <span>| {item.client}</span>}
                                    </h4>
                                </div>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {item.description.map((desc, i) => (
                                    <li key={i} style={{
                                        marginBottom: '10px',
                                        color: desc.startsWith('Technologies') ? 'var(--accent-color)' : 'var(--text-secondary)',
                                        fontWeight: desc.startsWith('Technologies') ? 'bold' : 'normal',
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

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </motion.button>
            </div>
        </div>
    );
};

export default KeyProjects;
