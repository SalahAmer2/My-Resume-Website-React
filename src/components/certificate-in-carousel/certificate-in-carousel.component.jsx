import React from 'react';

import './certificate-in-carousel.styles.scss';

const CertificateInCarousel = ({ certificateImage }) => (
    <figure className="shadow">
        <a href={certificateImage}>
            <img src={certificateImage} alt="image not found" />
        </a>
    </figure>
)

export default CertificateInCarousel;