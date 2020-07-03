import React from 'react';

import './linkText.styles.scss';

const LinkText = ({ sentence, Link }) => (
    <p className="linkText">
        {sentence}&nbsp;
        <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}} href={Link}>
            <strong>here</strong>
        </a>.
    </p>
)

export default LinkText;