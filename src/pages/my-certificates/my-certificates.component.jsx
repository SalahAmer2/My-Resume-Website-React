import React from 'react';

import CertificateInCarousel from "../../components/certificate-in-carousel/certificate-in-carousel.component";
import CertificateWithoutCarousel from "../../components/certificate-without-carousel/certificate-without-carousel.component";

import './my-certificates.styles.scss';

const MyCertificates = () => (
    <div>
        <div class="selectToView">
            <p>Select the certificate to view it.</p>
        </div>
        <br />
        <section class="slideshow">
            <div class="content">
                <div class="content-carousel">
                    <CertificateInCarousel certificatePath={require("../../assets/images/Web Development Certificate.jpg")} />
                    <CertificateInCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate of Participation Front End Dev.jpg")} />
                    <CertificateInCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate of Completion Front End Dev.jpg")} />
                    <CertificateInCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate Full Stack Dev.jpg")} />
                    <CertificateInCarousel certificatePath={require("../../assets/images/Front End Developer Nanodegree.jpg")} />
                </div>
            </div>
        </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        
        <div class="certificatesWithoutCarousel">
            <CertificateWithoutCarousel certificatePath={require("../../assets/images/Web Development Certificate.jpg")} /><br/>
            <CertificateWithoutCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate of Participation Front End Dev.jpg")} /><br/>
            <CertificateWithoutCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate of Completion Front End Dev.jpg")} /><br/>
            <CertificateWithoutCarousel certificatePath={require("../../assets/images/Udacity Graduation Certificate Full Stack Dev.jpg")} /><br/>
            <CertificateWithoutCarousel certificatePath={require("../../assets/images/Front End Developer Nanodegree.jpg")} />
        </div>
    </div>
)

export default MyCertificates;