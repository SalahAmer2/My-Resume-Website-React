import React from 'react';

const CertificateWithoutCarousel = ({ certificatePath }) => (
    <div class="certificatesDiv">
        <a href={certificatePath}>
            <img src={certificatePath} alt="image not found" />
        </a>
    </div>
)

export default CertificateWithoutCarousel;