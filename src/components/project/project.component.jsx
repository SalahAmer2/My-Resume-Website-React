import React from 'react';

import LinkText from "../linkText/linkText.component";
import Video from "../video/video.component";

const Project = ({ videoTitle, src, sentence, gitHubLink }) => (
    <div>
        <Video videoTitle={videoTitle} src={src} />
        <LinkText sentence={sentence} gitHubLink={gitHubLink} />
        <br />
    </div>
)

export default Project;