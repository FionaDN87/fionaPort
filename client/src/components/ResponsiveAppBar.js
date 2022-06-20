import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import '../styles/appBarStyle.css';
import { Link } from 'react-router-dom';
const pages = ['Home', 'Resume', 'Work', 'Contact'];

const ResponsiveAppBar = () => {
    const handleClickMenu = (page) =>{
        console.log("Clicked " + page);
    }
  return (
    <AppBar  position="static">
      <Container className="appBarStyle" maxWidth="false">
        <Toolbar disableGutters className='appBarStyle'>
          <FaceRetouchingNaturalIcon fontSize="large" />
          <Box>
            {pages.map(page => (
              <Link to={`/${page}`} key={page} ><Button 
                onClick={() => handleClickMenu(page)}
              >
                {page}
              </Button></Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
