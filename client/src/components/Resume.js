import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import fionaPP from '.././images/fiona_pp.jpg';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '.././styles/progressBarStyle.css';
import '.././styles/bodyPageStyle.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Resume = () => {
    return(
        <div className="centerStyle">
            Download Resume <a href='.././resume/PDF_Nguyen,Fiona_Resume_2022.PDF' download><DownloadIcon/></a>
            <p></p>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <p><img src={fionaPP} className="fionaResumeImage" alt="profile"></img></p>
                        
                        <div><Link
                            to='#'
                            onClick={(e) => {
                            window.location.href = "mailto:fiona.nguyen5587@gmail.com";
                            e.preventDefault();
                            }}
                            ><EmailIcon className="iconStyle"/></Link>
                        </div>

                        <p></p>
                        <a href="https://www.google.com/maps/place/Huntsville,+Alabama/@34.7011063,-86.9406307,10z/data=!3m1!4b1!4m5!3m4!1s0x88626b67cda2898d:0x9a2c7e89c804566b!8m2!3d34.7303688!4d-86.5861037"
                            target="_blank" rel="noopener noreferrer"
                            ><Button><FmdGoodIcon className="iconStyle"/></Button>
                        </a>

                        <p></p>
                        <a href="https://www.linkedin.com/in/fiona-nguyen-9b412034"
                            target="_blank" rel="noopener noreferrer"
                            ><Button><LinkedInIcon className="iconStyle"/></Button>
                        </a>

                        <p></p>

                        <strong className="iconStyle">SKILLS</strong>
                        <hr className="iconStyle"></hr>
                        <strong className="iconStyle">Programming Languages</strong>
                        <p></p>
                        <div className="meter">
	                        <span style={{width:"90%"}}>C++</span>
                        </div>

                        <div className="meter">
	                        <span style={{width:"95%"}}>C#</span>
                        </div>

                        <div className="meter">
	                        <span style={{width:"95%"}}>JavaScript</span>
                        </div>

                        <div className="meter green">
	                        <span style={{width:"80%"}}>Python</span>
                        </div>

                        <p></p>

                        <strong className="iconStyle">Frontend Frameworks</strong>
                        <p></p>
                        <div className="meter orange">
	                        <span style={{width:"100%"}}>ReactJS</span>
                        </div>
                        <div className="meter green">
	                        <span style={{width:"85%"}}>Angular</span>
                        </div>

                        <p></p>

                        <strong className="iconStyle">Backend Frameworks</strong>
                        <p></p>
                        <div className="meter orange">
	                        <span style={{width:"100%"}}>ExpressJS</span>
                        </div>
                        <div className="meter orange">
	                        <span style={{width:"100%"}}>NodeJS</span>
                        </div>
                        <div className="meter">
	                        <span style={{width:"97%"}}>ASP.NET CORE</span>
                        </div>

                        <p></p>

                        <strong className="iconStyle">Others</strong>
                        <p></p>
                        <div className="meter">
	                        <span style={{width:"90%"}}> Microsoft Azure (Cloud Computing Services)</span>
                        </div>
                        <div className="meter">
	                        <span style={{width:"90%"}}> Azure DevOps</span>
                        </div>
                        <div className="meter green">
	                        <span style={{width:"80%"}}> Kubernetes</span>
                        </div>
                        <div className="meter green">
	                        <span style={{width:"80%"}}> JFrog Artifactory</span>
                        </div>
                        <div className="meter orange">
	                        <span style={{width:"100%"}}> Docker</span>
                        </div>
                        <div className="meter orange">
	                        <span style={{width:"100%"}}>Git</span>
                        </div>

                        <p></p>

                        <strong className="iconStyle">Source Code Management</strong>
                        <p></p>
                        <div className='smallFontSize'>BitBucket</div>
                        <div className='smallFontSize'>Gitlab</div>
                        <div className='smallFontSize'>DevOps</div>
                        <div className='smallFontSize'>Github</div>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <div className='secondColResume'>
                        <div className='borderText'>
                        <h2 className='h2Spacing'>Fiona Nguyen</h2>
                        <div>Software Engineer</div>
                        <hr className="iconStyle"></hr>
                        <p>A Software Engineer who aims to participate in 
                            all phases of software development, 
                            including requirements, analysis, design, 
                            implementation, and testing.</p>
                            </div>
                        </div>

                        <div className='secondColResume'>
                            <p></p>
                            <strong className="iconStyle">WORK EXPERENCE</strong>
                            <hr className="iconStyle"></hr>
                            <p></p>
                            <div>
                            <strong className="iconStyle">Software Engineer</strong>
                            <div>Northrop Grumman - Full Time</div>
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className='yearLocStyle'>
                                <Grid item xs={8}>
                                    <div>May 2021 - Present</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Huntsville, AL, USA</div>
                                </Grid></Grid>
                            </Box>
                                <ul className='ulSpacing'>
                                    <li>Java/C/C++ development and/or 
                                    front-end web development including JavaScript Frameworks 
                                    (Angular or ReactJS), HTML, and CSS</li>
                                    <li>Docker, Jfrog Artifactory, Kubernetes</li>
                                    <li>Distributed version control software (GitLab, Bitbucket)</li>
                                    <li>Linux and Windows operating systems</li>
                                    <li>Agile methodologies (Scrum, Kanban, Extreme Programming), Scaled Agile – (SAFe, Scrum@Scale, DaD, etc)</li>
                                    <li>Continuous integration (CI) and continuous delivery (CD) and related tools</li>
                                </ul> 
                            </div>

                            <p></p>
                            <div>
                            <strong className="iconStyle">Software Developer</strong>
                            <div>Leidos - Full Time</div>
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className='yearLocStyle'>
                                <Grid item xs={8}>
                                    <div>Oct 2020 - May 2021</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Huntsville, AL, USA</div>
                                </Grid></Grid>
                            </Box>
                                <ul className='ulSpacing'>
                                    <li>Working with UAS and unmanned ground robotics 
                                    systems, radio communications technologies, networking hardware, 
                                    security appliances and software</li>
                                    <li>Maintaining code and integrating 
                                        software components into a fully 
                                        functional software system</li>
                                    <li>Developing, maintaining and unit 
                                        testing software components into a 
                                        fully functional software system </li>
                                    <li>Developing, documenting, and maintaining 
                                        architecture, requirements, algorithms, 
                                        interfaces and designs for software systems </li>
                                    <li>Contributing in the integration of system and 
                                        subsystem components as well as execution 
                                        of system acceptance test(s)</li>
                                    <li>AGILE SW environment</li>
                                    <li>Linux, C++, Jira</li>
                                </ul> 
                            </div>

                            <p></p>
                            <div>
                            <strong className="iconStyle">Junior Software Developer</strong>
                            <div>1st Edge LLC - Full Time</div>
                            <Box sx={{ flexGrow: 1 }} className='yearLocStyle'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>July 2020 - Oct 2020</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Huntsville, AL, USA</div>
                                </Grid></Grid>
                            </Box>
                                <ul className='ulSpacing'>
                                    <li>SW languages – C#, SQL, Java, JavaScipt</li>
                                    <li>SW Frameworks – DotNet Core, ASPNetCore, node, bootstrap, REACT</li>
                                    <li>SW development methods – Scrum, CI/CD</li>
                                    <li>Skilled DevOps of hands-on experience supporting,
                                         automating, and optimizing mission critical deployments in MS Azure, 
                                         leveraging configuration management, CI/CD, and DevOps processes</li>
                                </ul> 
                            </div>

                            <p></p>
                            <div>
                            <strong className="iconStyle">Computer Science Lab Monitor</strong>
                            <div>University of Central Oklahoma - Part Time</div>
                            <Box sx={{ flexGrow: 1 }} className='yearLocStyle'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>June 2019 - May 2020</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Oklahoma City, OK, USA</div>
                                </Grid></Grid>
                            </Box>
                            </div>

                            <p></p>
                            <div>
                            <strong className="iconStyle">Upward Bound Math Science GAME ON</strong>
                            <div>Technical Position - Part Time</div>
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className='yearLocStyle'>
                                <Grid item xs={8}>
                                    <div>Dec 2018 - May 2020</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Oklahoma City, OK, USA</div>
                                </Grid></Grid>
                            </Box>
                                <ul className='ulSpacing'>
                                    <li>Designing and delivering lesson plans for 
                                        Semester & Summer programs for 
                                        introductory & intensive training programs 
                                        to high school students. Projects are designed 
                                        and delivered for IoT-based Raspberry Pi 
                                        (Developing a full home Security System using Python)</li>
                                </ul> 
                            </div>

                            <p></p>
                            <strong className="iconStyle">EDUCATION</strong>
                            <hr className="iconStyle"></hr>
                            <p></p>
                            <strong className="iconStyle">BSc Computer Science</strong>
                            <div>University of Central Oklahoma</div>
                            <Box sx={{ flexGrow: 1 }} className='yearLocStyle'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>May 2017 - May 2020</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Oklahoma City, OK, USA</div>
                                </Grid></Grid>
                            </Box>
                            <div>Grade: Outstanding</div>

                            <p></p>
                            <strong className="iconStyle">HONORS & AWARDS</strong>
                            <hr className="iconStyle"></hr>
                            <p></p>
                            <strong className="iconStyle">Outstanding Graduate Award</strong>
                            <Box sx={{ flexGrow: 1 }} className='yearLocStyle'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>Issued by University of Central Oklahoma</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Oklahoma City, OK, USA</div>
                                </Grid></Grid>
                            </Box>
                            <div>May 2020</div>

                            <p></p>
                            <strong className="iconStyle">Beresford Scholarship</strong>
                            <Box sx={{ flexGrow: 1 }} className='yearLocStyle'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>Issued by University of Central Oklahoma</div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className='justifyRight'>Oklahoma City, OK, USA</div>
                                </Grid></Grid>
                            </Box>
                            <div>Aug 2019</div>
                            <p></p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Resume;
