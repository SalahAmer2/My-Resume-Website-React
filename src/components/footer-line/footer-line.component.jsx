import React from 'react';

const FooterLine = ({ iconLink, iconName, iconSiteLink, iconSiteName }) => (
    <div>
        <a
            target="_blank"
            href={iconLink}
        >
            {iconName} &nbsp;
        </a>
            icon by &nbsp;
        <a
            target="_blank"
            href={iconSiteLink}
        >
            {iconSiteName} &nbsp;
        </a>
    </div>
)

export default FooterLine;
