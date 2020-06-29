import React from 'react';

const LinkText = ({ sentence, gitHubLink }) => (
    <p className="linkText">
        {sentence}
        <a target="_blank" style={{textDecoration: 'underline'}} href={gitHubLink}>
            <strong>here</strong>
        </a>.
    </p>
)

export default LinkText;