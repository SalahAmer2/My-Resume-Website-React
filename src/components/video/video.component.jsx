import React from 'react';

import './video.styles.scss'

const Video = ({ videoTitle, src }) => (
    <div>
        <p class="videoTitles">{videoTitle}</p>
        <video width="500" controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
)

export default Video;