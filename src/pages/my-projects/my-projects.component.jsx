import React from 'react';
//We let the <div class="containerDiv">s be here in case you
//ever want to make groups of projects like "React Projects" for example,
//of course in that case you would make a <p class="groupTitles"></p>
//for each group and give the styling of videoTitles to groupTitles 
//instead and change videoTitles' styling to be different, eg. smaller,
//so groupTitles would be the big one on top, and of course add a <hr />
//after it

import LinkText from "../../components/linkText/linkText.component";
import Video from "../../components/video/video.component";
import Project from "../../components/project/project.component";

import './my-projects.styles.scss';

const MyProjects = () => (
    <div>
        <br />
        <div className="containerDiv">
            <div style={{padding: '10px'}}>
                <LinkText 
                    sentence="Link to my GitHub Profile's Repositories" 
                    gitHubLink="https://github.com/SalahAmer2?tab=repositories"  
                />
            </div>
        </div>
        <br />
        <div class="containerDiv">
            <Project 
                videoTitle="Travel App" 
                src={require("../../assets/videos/Travel App.mp4")}
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Travel-App"   
            />
        </div>
        <br />
        <div class="containerDiv">
            <Video 
                videoTitle="Live Websites"
                src={require("../../assets/videos/Live Website.mp4")}
            />
            <LinkText 
                sentence="Link to the live website"
                gitHubLink="https://quiet-lowlands-72158.herokuapp.com"
            />
            <LinkText
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Live-Website-Project"
            />
            <LinkText
                sentence="Link to my To-Do List live web app that has a database"
                gitHubLink="https://intense-fjord-30738.herokuapp.com"
            />
        </div>
        <br />
        <div class="containerDiv">
            <Project
                videoTitle='Authentication Project "Secrets"'
                src={require("../../assets/videos/Auth_Secrets.mp4")}
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Auth-Project"
            />
        </div>
        <br />
        <div class="containerDiv">
            <Project
                videoTitle="Blog Website"
                src={require("../../assets/videos/Blog Website with Database.mp4")}
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Blog-with-Database"
            />
        </div>
        <br />
        <div class="containerDiv">
            <Project
                videoTitle="Simon Game"
                src={require("../../assets/videos/Simon Game.mp4")}
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Simon-Game"
            />
        </div>
        <br />
        <div class="containerDiv">
            <Project
                videoTitle="Drum Kit"
                src={require("../../assets/videos/Drum Kit.mp4")}
                sentence="It's link on GitHub"
                gitHubLink="https://github.com/SalahAmer2/Drum-Kit"
            />
        </div>
        <br/>
    </div>
)

export default MyProjects;