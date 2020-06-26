import React from 'react';

import Tr from "../../components/about-me-tr/tr.component";

const AboutMe = () => (
    <div class="everythingUnderHeader">
        <div class="leftDiv">
            <h3>Professional Details</h3>
            <img
             src="/images/myPhoto.jpg" 
             alt="image not found" 
             class="myPhoto" 
            />
            <table cellpadding="10">
                <Tr title='NAME' info='Salah Amer' />
                <Tr title='AGE' info='24 years old' />
                <Tr title='LOCATION' info='Egypt' />
                <Tr title='DEGREE' info='Bachelor of Commerce' />
                <Tr title='CAREER LEVEL' info='Entry Level' />
                <Tr title='PHONE' info='+201069651732' />
                <Tr title='E-MAIL' info='salahayman2@gmail.com' />
            </table>
        </div>
        <div class="rightDiv">
            <h3>About Me</h3><br />

            <div class="skillsIcons">
                <img
                 src="/images/html js css.png" 
                 alt="image not found" 
                 class="minimizeImg1Size" 
                />
                <img
                 src="/images/nodejs icon.png" 
                 alt="image not found" 
                 class="minimizeImg2Size" 
                />
            </div>

            <h3>I'm a Web Developer</h3>
            <p>
                I'm a committed, responsible, driven web developer,
                who gets the job done and gives his client exactly what he needs promptly.
                I have experience in both Front End and Back End development but I'm focused
                on Front End. I'm skilled in HTML, CSS, JavaScript, Git &amp; Github, JQuery, 
                Node.js, Express.js, EJS, MySQL, MongoDB, Authentication &amp; Security, Webpack,
                Working with Multiple APIs in the same project, and Unit testing.
            </p>
        </div>
    </div>
)

export default AboutMe;

