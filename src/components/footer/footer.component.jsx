import React from 'react';

import FooterLine from "../footer-line/footer-line.component";

import './footer.styles.scss';

const Footer = () => (
    <div>
        <br />
        <h1 className="footer">
            <FooterLine
                iconLink="https://www.nicepng.com/downpng/u2q8w7a9w7r5r5q8_html-css-icon-png"
                iconName='HTML JS CSS'
                iconSiteLink="https://www.nicepng.com"
                iconSiteName='nicepng'
            />
            <FooterLine 
                iconLink="https://www.iconfinder.com/icons/1012818/code_development_logo_nodejs_icon"
                iconName='Node.js' 
                iconSiteLink="https://www.iconfinder.com" 
                iconSiteName='iconfinder'
            />
            <FooterLine 
                iconLink="https://www.cleanpng.com/png-react-logo-redux-webpack-babel-6339921" 
                iconName='React'
                iconSiteLink="https://www.cleanpng.com" 
                iconSiteName='cleanpng' 
            />
        </h1>
    </div>
)

export default Footer;
