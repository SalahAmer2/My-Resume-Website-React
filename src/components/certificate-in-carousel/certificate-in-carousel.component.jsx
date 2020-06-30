import React from 'react';

import './certificate-in-carousel.styles.scss';

const CertificateInCarousel = ({ certificateImage }) => (
    <figure className="shadow">
        <a href={certificateImage} target="_blank" rel="noopener noreferrer">
            <img src={certificateImage} alt="image not found" />
        </a>
    </figure>
)

export default CertificateInCarousel;