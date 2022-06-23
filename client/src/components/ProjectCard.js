import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '.././styles/workPageStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const defaultProps = {
    text:'',
    url:'',
    projectName: '',
    githubURL: '',
    youTubeURL: '',
    details:''
}
export default function MediaCard(props) {
  return (
    <Card sx={{ width:1 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.url}
        alt={props.projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={props.githubURL}
                  target="_blank" rel="noopener noreferrer"
                  ><Button size="large"><GitHubIcon /></Button></a>
      <a href={props.youTubeURL}
                  target="_blank" rel="noopener noreferrer"
                  ><Button size="large"><YouTubeIcon /></Button></a>
      <br></br>
      
      </CardActions>
      <Accordion className='cardActionStyle'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='detailStyle'>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
