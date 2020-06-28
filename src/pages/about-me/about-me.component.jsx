import React from 'react';

import Tr from "../../components/about-me-tr/tr.component";

const AboutMe = () => (
    <div className="everythingUnderHeader">
        <div className="leftDiv">
            <h3>Professional Details</h3>
            <img
             src={require("../../assets/images/myPhoto.jpg")} 
             alt="image not found" 
             className="myPhoto" 
            />
            <table cellPadding="10">
                <tbody>
                <Tr title='NAME' info='Salah Amer' />
                <Tr title='AGE' info='24 years old' />
                <Tr title='LOCATION' info='Egypt' />
                <Tr title='DEGREE' info='Bachelor of Commerce' />
                <Tr title='CAREER LEVEL' info='Entry Level' />
                <Tr title='PHONE' info='+201069651732' />
                <Tr title='E-MAIL' info='salahayman2@gmail.com' />
                </tbody>
            </table>
        </div>
        <div className="rightDiv">
            <h3>About Me</h3><br />

            <div className="skillsIcons">
                <img
                 src={require("../../assets/images/html js css.png")} 
                 alt="image not found" 
                 className="minimizeImg1Size" 
                />
                <img
                 src={require("../../assets/images/nodejs icon.png")}
                 alt="image not found" 
                 className="minimizeImg2Size" 
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