import React from 'react';

import './certificate-without-carousel.styles.scss';

const CertificateWithoutCarousel = ({ certificatePath }) => (
    <div class="certificatesDiv">
        <a href={certificatePath}>
            <img src={certificatePath} alt="image not found" />
        </a>
    </div>
)

export default CertificateWithoutCarousel;