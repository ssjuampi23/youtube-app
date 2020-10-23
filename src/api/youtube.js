import axios from 'axios';

const KEY = 'AIzaSyB8tw13_6ExCEs-8h1yz4ZqMMd9lPr7-Bc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
