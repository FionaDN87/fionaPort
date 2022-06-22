import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const defaultProps = {
    text:'',
    url:'',
    projectName: '',
}
export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small"><GitHubIcon /></Button>
        <Button size="small"><YouTubeIcon /></Button>
      </CardActions>
    </Card>
  );
}
