import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);
    
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`, 
      requestOptions
      )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  
  return <VideoList videos={videos}/>;
}

export default App;
