import React from 'react';
import MediaCard from './ProjectCard.js';
import OnlineStoreImage from '.././images/Online_Store.PNG';
import HandiparkImage from '.././images/HandiparkImage.PNG';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '.././styles/workPageStyle.css';


const Work = () => {
    return( 
        <div >
        <Grid container spacing={4} className='paddingStyle'>
            <Grid item xs={12} sm={6} md={4}>
            <MediaCard 
            text="Frontend: JS, HTML CSS. Backend: Firebase"
            url={OnlineStoreImage}
            projectName="Online Shopping Store"
            githubURL="https://github.com/FionaDN87/WSP20_DiepN_TermProject_OptionA.git"
            youTubeURL="https://youtu.be/w1R3lDFP9hc"
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <MediaCard 
            text="A social networking mobile app" 
            
            projectName="SIMSO"
            githubURL="https://github.com/FionaDN87/SIMSO.git"
            youTubeURL=""
            details="A simple social media app (Android & iOS) designed with different views for the 
            users. User authentication was based on simple login or fingerprint recognition. 
            Searching for friends, friend management, content filter and content addition, tags, 
            account settings, messengers, time and touch trackers are remarkable features of SIMSO. 
            Cloud functions were employed to allow access to a complete range of fully managed 
            mobile-centric services including analytics, authentication and Realtime Database.
            Deliver solutions in an Agile – Scrum project methodology."
            />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <MediaCard 
            text="Parking Management System for Disabilities" 
            url={HandiparkImage}
            projectName="HANDIPARK"
            githubURL="https://github.com/FionaDN87/handipark_DiepN.git"
            youTubeURL="https://youtu.be/Ycxjt9l6bz8"
            details="A mobile app (Android & iOS) that was based on the client-server model where 
            the server-side uses Firebase Realtime database to keep all the data and business logics. 
            Deploying Google map and Firestore, the client-side enables users to look up/search 
            the campus parking map, to identify/search for reserved parking spots for people 
            with disabilities and to navigate to a chosen location, to update the status of 
            parking space (as to hold/available/unavailable).
            Agile communication with GitHub source control"
            />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <MediaCard 
            text="Pet Sitting Application" 
            
            projectName="PAWPRINT"
            githubURL="https://github.com/FionaDN87/pawprint_DiepN.git"
            youTubeURL=""
            details="A mobile app (Android & iOS) was built for interaction between pet sitters 
            and customers. PawPrint utilizes cameras, Firebase Storage, user authentication to create, 
            store, and retrieve data respectively. Google map was implemented inside the app display 
            locations of pet sitters that neighboring the current user and display the shortest 
            route between 2 locations. A calendar feature was used for booking a new service, 
            and Pet profiles were shared when booking a new service while owner profiles are private. 
            All information updates and stored in Firebase storage.
            Agile communication with GitHub source control"
            />
            </Grid>
        </Grid>
        
        </div>
    )
}

export default Work;
