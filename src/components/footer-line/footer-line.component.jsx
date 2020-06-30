import React from 'react';

const FooterLine = ({ iconLink, iconName, iconSiteLink, iconSiteName }) => (
    <div>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={iconLink}
        >
            {iconName} &nbsp;
        </a>
            icon by &nbsp;
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={iconSiteLink}
        >
            {iconSiteName} &nbsp;
        </a>
    </div>
)

export default FooterLine;
