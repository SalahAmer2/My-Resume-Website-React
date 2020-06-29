import React from 'react';

import './linkText.styles.scss'

const LinkText = ({ sentence, gitHubLink }) => (
    <p className="linkText">
        {sentence}&nbsp;
        <a target="_blank" style={{textDecoration: 'underline'}} href={gitHubLink}>
            <strong>here</strong>
        </a>.
    </p>
)

export default LinkText;