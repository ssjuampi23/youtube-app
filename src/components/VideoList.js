import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    console.log(videos);

    const renderedList = videos.map(video => {
       return <VideoItem key={video.id.channelId} video={video}/>
    });

    return <div>{renderedList}</div>;
};

export default VideoList;