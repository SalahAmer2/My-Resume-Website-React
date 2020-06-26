import React from 'react';

const LinkText = ({ sentence, gitHubLink }) => (
    <p class="linkText">
        {sentence}
        <a target="_blank" style="text-decoration: underline" href={gitHubLink}>
            <strong>here</strong>
        </a>.
    </p>
)

export default LinkText;