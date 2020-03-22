import React from "react";
import {Template} from "../BaseTemplate/Template";
import Pic2 from "../../assets/images/Pic2.jpeg";
import Ezedox from "../../assets/images/Ezedox.png";
import Work2 from "../../assets/images/Work2.jpeg";
import WorkImage from "../../assets/images/WorkImage.jpeg"


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
                                        <div className="progress-bar" style={{width: "80%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>C++</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "70%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Java</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "65%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>HTML</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}></div>
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
                                        <div className="progress-bar" style={{width: "60%"}}/>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Nosql</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "60%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="skills">
                                <h4>Frameworks</h4>

                                <div className="skill-item">
                                    <h4>Flask/Django</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>React JS</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Node JS</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "60%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Agile</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills">
                                <h4>Languages</h4>

                                <div className="skill-item">
                                    <h4>English (Fluent)</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <h4>Hindi(Fluent</h4>

                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}></div>
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
                                    <h4>Senior Software developer(Lead)</h4>

                                    <h6><a href="https://decisionminds.com/">Decision Minds</a> &bull;&emsp; Current
                                    </h6>

                                    <ul>
                                        <li><p>Responsible for developing Enterprise Applications from Scratch for clients like SendSafely, First Tech</p></li>
                                        <li><p>Lead a Team For Full Stack Development on Tech React, Django and Postgres</p></li>
                                        <li><p></p></li>

                                    </ul>
                                </div>

                                <div className="box">
                                    <h4>Senior Software developer(Lead)</h4>

                                    <h6>Uberry Switzerland&nbsp;&emsp;&bull;&emsp; October 2019</h6>

                                    <p>Developing Various applications in django, Angular&nbsp;and
                                        Postgres..</p>
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
                </div>
            </div>

            <div className="container-fluid" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 left"></div>

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

                                <div className="msg"><textarea id="message" name="message"></textarea><label
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
}