import React from 'react';

const CertificateInCarousel = ({ certificatePath }) => (
    <figure class="shadow">
        <a href={certificatePath}>
            <img src={certificatePath} alt="image not found" />
        </a>
    </figure>
)

export default CertificateInCarousel;