import React from 'react';

import CertificateInCarousel from "../../components/certificate-in-carousel/certificate-in-carousel.component";
import CertificateWithoutCarousel from "../../components/certificate-without-carousel/certificate-without-carousel.component";

import web_dev_certificate from "../../assets/images/Web Development Certificate.jpg";
import uda_frontend_participation_certificate from "../../assets/images/Udacity Graduation Certificate of Participation Front End Dev.jpg";
import uda_frontend_completion_certificate from "../../assets/images/Udacity Graduation Certificate of Completion Front End Dev.jpg";
import uda_fullstack_participation_certificate from "../../assets/images/Udacity Graduation Certificate Full Stack Dev.jpg";
import uda_frontend_Nanodegree_certificate from "../../assets/images/Front End Developer Nanodegree.jpg";

import './my-certificates.styles.scss';

const MyCertificates = () => (
    <div>
        <div className="selectToView">
            <p>Select the certificate to view it.</p>
        </div>
        <br />
        <section className="slideshow">
            <div className="content">
                <div className="content-carousel">
                    <CertificateInCarousel
                        certificateImage={web_dev_certificate} 
                    />
                    <CertificateInCarousel
                        certificateImage={uda_frontend_participation_certificate} 
                    />
                    <CertificateInCarousel
                        certificateImage={uda_frontend_completion_certificate} 
                    />
                    <CertificateInCarousel 
                        certificateImage={uda_fullstack_participation_certificate} 
                    />
                    <CertificateInCarousel
                        certificateImage={uda_frontend_Nanodegree_certificate} 
                    />
                </div>
            </div>
        </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        
        <div className="certificatesWithoutCarousel">
            <CertificateWithoutCarousel
                certificateImage={web_dev_certificate} 
            /><br/>
            <CertificateWithoutCarousel 
                certificateImage={uda_frontend_participation_certificate} 
            /><br/>
            <CertificateWithoutCarousel
                certificateImage={uda_frontend_completion_certificate} 
            /><br/>
            <CertificateWithoutCarousel 
                certificateImage={uda_fullstack_participation_certificate} 
            /><br/>
            <CertificateWithoutCarousel
                certificateImage={uda_frontend_Nanodegree_certificate} 
            />
        </div>
    </div>
)

export default MyCertificates;