import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div>
            <img alt="" src={video.snippet.thumbnails.medium.url}/>
            <div>
                {video.snippet.title}
            </div>
        </div>
    );
}

export default VideoItem;