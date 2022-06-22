import React from 'react';
import MediaCard from './ProjectCard.js';
import OnlineStoreImage from '.././images/Online_Store.PNG';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Work = () => {
    return( 
        <div>
            
        <div>
            <MediaCard 
            text="Test Text" 
            url={OnlineStoreImage}
            projectName="Online Store"/>

            <MediaCard 
            text="Test Text" 
            url={OnlineStoreImage}
            projectName="Online Store"/>


        </div>
        </div>
    )
}

export default Work;
