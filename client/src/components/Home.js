import React from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '.././styles/bodyPageStyle.css';
import fionaPP from '.././images/fiona_pp.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const name = " Fiona Nguyen"
    return(
        <div>
            <img src={fionaPP} className="fionaImage" alt='profile'></img>
            <div className="textIntroStyle">Hello, I'm <strong className='nameStyle'> {name} </strong>, 
                Full-stack Software Engineer Based in Huntsville, AL, USA
            </div>
            <div className='paddingLeft'>Follow me<a href="https://www.linkedin.com/in/fiona-nguyen-9b412034"
                target="_blank" rel="noopener noreferrer"
                ><Button><LinkedInIcon/></Button></a>
            </div>

            <p className='paddingLeft'><EmailIcon/> <Link
                to='#'
                onClick={(e) => {
                    window.location.href = "mailto:fiona.nguyen5587@gmail.com";
                    e.preventDefault();
                }}
                >fiona.nguyen5587@gmail.com</Link>
            </p>
        </div>
    )
}

export default Home;