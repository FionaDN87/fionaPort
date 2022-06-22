import React from 'react';
import MediaCard from './ProjectCard.js';
import OnlineStoreImage from '.././images/Online_Store.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Work = () => {
    return( 
        <div>
            
        <div>
            {/* <MediaCard 
            text="Test Text" 
            url={OnlineStoreImage}
            projectName="Online Store"/>

            <MediaCard 
            text="Test Text" 
            url={OnlineStoreImage}
            projectName="Online Store"/> */}

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <div>TEST</div>
      </Grid>
    </Box>
        </div>
        </div>
    )
}

export default Work;
