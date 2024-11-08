import React from "react";
import {Template} from "../BaseTemplate/Template";
import Pic2 from "../../assets/images/Pic2.jpeg";
import Ezedox from "../../assets/images/Ezedox.png";
import Work2 from "../../assets/images/Work2.jpeg";
import WorkImage from "../../assets/images/WorkImage.jpeg";
import repusight from "../../assets/images/repusight.png";
import platformcore from "../../assets/images/platformCore.jpg";
import datahub from "../../assets/images/datahub2.png";
import swindle from "../../assets/images/swindle.jpg";
import rudiger from "../../assets/images/rudiger.png";
import dm from "../../assets/images/dm.jpeg";

export let Landing = (props) =>{
    return(
        <Template>
            <div className="container-fluid" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12 picture"><img alt="picture" className="rounded-circle"
                                                                         src={Pic2}
                                                                         style={{height: "200px"}}/></div>

                        <div className="col-md-9 col-sm-12 offset-md-1">
                            <h2>About</h2>

                            <p>Now Being able to work in a fast-paced Agile environment, I started my journey as a
                                freelancer in
                                2016 as a general programmer in Java, C++, Python. I was building web scraping scripts,
                                doodling
                                around web technologies for data gathering where I was introduced to Flask framework, I
                                implemented
                                this framework for chat application, review website.</p>
                            &nbsp;

                            <p>Now I am that point of career with 4 years of experience in web development environment,
                                I can work
                                with fellow developers placed remotely or in-house, adaptable to all challenges thrown
                                at me. I am
                                able to work well both in a team environment as well as using own initiative. I am able
                                to work well
                                under pressure and adhere to strict deadlines.</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="cv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <h3>Skills</h3>
                        </div>

                        <div className="col-md-9 col-sm-12 offset-md-1">
                            <div className="skills">
                                <h4>Programming languages</h4>

                                <div className="skill-item">
                                    <h4>Python</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Rust</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Java</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "70%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>HTML</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Javascript</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>SASS/LESS</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "60%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Mysql</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Nosql</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "760%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="skills">
                                <h4>Frameworks</h4>

                                <div className="skill-item">
                                    <h4>Flask/Django</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>React JS</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Node JS</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "70%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Agile</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="skills">
                                <h4>Languages</h4>

                                <div className="skill-item">
                                    <h4>English (Fluent)</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Hindi(Fluent</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr id="experience"/>
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <h3>Experience</h3>
                        </div>

                        <div className="col-md-9 col-sm-12 offset-md-1">
                            <div className="exp">
                                <h4>Professional</h4>
                                <div className="box">
                                    <h4>Senior Software Engineer</h4>

                                    <h6><a href="https://www.amazon.jobs/content/en/teams/devices-and-services/lab126">Amazon Lab126, Bengaluru, India
                                    </a> &nbsp;&emsp;&bull;&emsp; Current
                                    </h6>

                                    <ul>
                                        <li><p>Led India team to implement product integrity and LLM
                                            applications for performance and reliability on
                                            amazon devices.</p></li>
                                        <li><p>Implemented data pipelines for ingesting documents
                                            from Confluence , MySQL server and WIKI pages to serve
                                            as a datasource to Amazon Q LLM model.</p></li>
                                        <li><p>Responsible for development for real time value
                                            transactions service.</p></li>
                                        <li><p>Worked on implementing infrastructure for
                                            implementing event based architecture and added
                                            data reconciliation.</p></li>
                                        <li><p>Implemented device monitoring system for
                                            detecting device temperature and humidity.
                                            Implemented microservices in python and java with
                                            mysql aurora as database.</p></li>
                                        <li><p>Implemented infrastructure using cdk and created
                                            auto CICD pipelines for these microservices.</p></li>
                                        <li><p>Promoted technical leadership to entry-level and
                                            junior engineers in complex enterprise system
                                            environment.</p></li>
                                        <li><p>Coordinated with other engineers to evaluate and
                                            improve software and hardware interfaces</p></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>Technical Lead</h4>

                                    <h6><a href="https://www.leo1.in/">Leo1, Mumbai, India
                                    </a> &nbsp;&emsp;&bull;&emsp; June 2023
                                    </h6>

                                    <ul>
                                        <li><p>Led two teams for delivering payment services and
                                            fund management service for NBFC.</p></li>
                                        <li><p>Responsible for development for real time value
                                            transactions service.</p></li>
                                        <li><p>Responsible for moving all services from monolithic
                                            to micro services</p></li>
                                        <li><p>Brought new ideas on using tools and frameworks to
                                            support micro service architecture and facilitated
                                            internal tools using retool</p></li>
                                        <li><p>Managed team performance by training,
                                            mentoring, disciplining, and motivating employees</p></li>
                                        <li><p>Supervised end-user support efforts, designing
                                            policies to establish consistent service guidelines and
                                            reliable ticket resolution.</p></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>Technical Lead(Contract)</h4>

                                    <h6><a href="https://www.pakama.com/">Pakama athletics
                                        gmbh</a> &nbsp;&emsp;&bull;&emsp; Current
                                    </h6>

                                    <ul>
                                        <li><p>Implemented and developed Backend Architecture
                                            for fitness platform which had Java, Kotlin, Spring
                                            Boot, Rust, Postgresql and Vue CMS as tech stack.</p></li>
                                        <li><p>Used AWS Platform to serve 10k users , I deployed
                                            the application using docker, lambda , ECS and RDS
                                            implementation for rapid scaling</p></li>
                                        <li><p>Implemented features for Kotlin and Swift Fitness
                                            App like integrating firebase dynamic links ,
                                            calendar export for class scheduling</p></li>
                                        <li><p>Implemented Event Based Architecture for
                                            Notifications using lambda function and rust</p></li>
                                        <li><p>Leading a Team For Full Stack Development on Tech
                                            React, Django and Postgres</p></li>
                                        <li><p>Created Telegram bot to implement fitness related
                                            queries using python.</p></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>Senior Software developer(Lead)</h4>

                                    <h6><a href="https://decisionminds.com/">Decision
                                        Minds</a> &nbsp;&emsp;&bull;&emsp; February 2022
                                    </h6>

                                    <ul>
                                        <li><p>Implemented and Developed Log aggregation tool to get logs and analyze
                                            status and realtime log
                                            analysis with anomaly detection using kafka , elk
                                            and NLP.</p></li>
                                        <li><p>Developed and Owned Event based Architecture and implementation to
                                            monitor resources on PAAS Skills
                                            platform Like Aws and Azure. Created the
                                            application for Western Union</p></li>
                                        <li><p>Responsible for developing Scalable Enterprise
                                            Applications from Scratch for clients like SendSafely,
                                            Excellent
                                            First Tech, Vmware and Western Union</p></li>
                                        <li><p>Involved in building Database Migration Application
                                            capable of migrating a over 100s gbs of data while
                                            Excellent
                                            you are sipping ☕</p></li>
                                        <li><p>Leading a Team For Full Stack Development on Tech
                                            React, Django and Postgres</p></li>
                                        <li><p>Follow Scrum and ability to handle team using jira.</p></li>
                                        {/*<li><p>Responsible for developing Scalable Enterprise Applications from Scratch for clients like SendSafely, First Tech</p></li>*/}
                                        {/*<li>*/}
                                        {/*    <p>Involved in building Database Migration Application capable of migrating a over 100s gbs of data while you are sipping ☕</p>*/}
                                        {/*</li>*/}
                                        {/*<li><p>Leading a Team For Full Stack Development on Tech React, Django and Postgres</p></li>*/}
                                        {/*<li><p>Follow Scrum and ability to handle team using jira</p></li>*/}
                                    </ul>
                                </div>

                                <div className="box">
                                    <h4>Senior Software developer(Lead)</h4>

                                    <h6>Uberry Switzerland&nbsp;&emsp;&bull;&emsp; October 2019</h6>

                                    <ul>
                                        <li><p>Developed E-Commerce application for delivering in django, Angular and
                                            Postgres..</p></li>
                                        <li><p>Demonstrated Ability to lead a remote using scrum</p></li>
                                        <li><p>Contributed Over Full Stack and was central part of handling the
                                            product</p></li>

                                    </ul>

                                </div>

                                <div className="box">

                                    <h4>Lead Software Developer(Contractor)</h4>

                                    <h6><a href="">Studytact Pvt Ltd</a>&emsp;&bull;&emsp; April 2019</h6>

                                    <p>Developed django application with video content sharing capability and Managed
                                        the
                                        application for content sharing.</p>
                                </div>

                                <div className="box">
                                    <h4>Software Developer(Contractor)</h4>

                                    <h6><a href="https://ezedox.com">mServ Technologies Private
                                        Limited</a> &emsp;&bull;&emsp;September
                                        2018</h6>

                                    <p>Tasked with developing django application and improving the application.</p>
                                </div>

                                <div className="box">
                                    <h4>Team Lead/ back end developer</h4>

                                    <h6><a href="http://www.repusight.com/">Repusight Pvt Ltd</a>&emsp;&bull;&emsp; Aug
                                        2017</h6>

                                    <p>Backend development of repusight. Leading a team on web development . I working
                                        on
                                        technologies like no sql, mongodb , python , flask , javascript , angular js,
                                        Natural
                                        language processing</p>
                                </div>

                                <div className="box">
                                    <h4>Data Sciences</h4>

                                    <h6><a href="https://www.gyandhan.com/">Gyandhan</a> &emsp;&bull;&emsp; May 2017
                                    </h6>

                                    <p>Scraping linkedIn to get required information and scrape facebook with nltk to
                                        extract
                                        meaning from the comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="portfolio">
                <h2>Latest projects</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={dm}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://www.decisionminds.com/">Decision
                                    Minds</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={rudiger}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://www.ruediger-woehrl.com/">Rudiger
                                    Woehrl</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={swindle}/>
                            <div className="overlay">
                                <h3 className="project-title"><a
                                    href="https://chrome.google.com/webstore/detail/swindle/fbehneehbojmfglgfccgkaegpnnaagkk?hl=en">Swindle</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={Ezedox}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://ezedox.com/">Ezedox</a></h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={Work2}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://github.com/Mario2334/OCR_Implementation">OCR
                                    Technology</a></h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12"><img className="project-work-image"
                                                                          src={WorkImage}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://github.com/Mario2334/my_jobs">Job
                                    Scraper</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <img className="portfolio-image" src={repusight}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://www.repusight.com/">Repusight Dashboard</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <img className="portfolio-image" src={platformcore}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://platformcore.com/">PlatformCore</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <img className="portfolio-image" src={datahub}/>
                            <div className="overlay">
                                <h3 className="project-title"><a href="https://www.decisionminds.com/datahub.html">Datahub</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 left"/>

                        <div className="col-lg-8 offset-lg-1">
                            <h4>Let&#39;s get in touch</h4>

                            <form action="https://formspree.io/sanket.mokashi95@gmail.com" autoComplete="off" id="form"
                                  method="post">
                                <div className="firstname"><input id="firstname" name="firstname" type="text"/> <label
                                    className="label"
                                    htmlFor="firstname">Firstname
                                    *</label></div>

                                <div className="lastname"><input id="lastname" name="lastname" type="text"/> <label
                                    className="label"
                                    htmlFor="name">Lastname</label>
                                </div>

                                <div className="email"><input id="email" name="email" type="email"/> <label
                                    className="label"
                                    htmlFor="email">Email
                                    *</label></div>

                                <div className="tel"><input id="phone" name="phone" type="tel"/> <label
                                    className="label" htmlFor="phone">Phone</label>
                                </div>

                                <div className="subject"><input id="subject" name="subject" type="text"/> <label
                                    className="label"
                                    htmlFor="subject">Subject
                                    *</label></div>

                                <div className="msg"><textarea id="message" name="message"/><label
                                    className="label"
                                    htmlFor="message">Message
                                    *</label></div>

                                <div className="input-info">* required field</div>

                                <div className="btn-div">
                                    <button className="button btn-send" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
};
