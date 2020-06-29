import React from 'react';

import './certificate-without-carousel.styles.scss';

const CertificateWithoutCarousel = ({ certificateImage }) => (
    <div className="certificatesDiv">
        <a href={certificateImage}>
            <img src={certificateImage} alt="image not found" />
        </a>
    </div>
)

export default CertificateWithoutCarousel;