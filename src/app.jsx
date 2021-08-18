import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

// function component이기 때문에 관련되 state나 props가 바뀌면 우리가 여기 정의한
// 멤버 면수가 다시 만들어지고 그 말의 의미는 여기서 정의한 콜백함수가 다시 만들어짐
// 즉 state가 바뀔때마다 search라는 것은 새로운 함수를 가르키는 것.
// 그래서 memo만 사용해서는 안된다. search 등등 멤버변수가 바뀌면서 새로운 props이 전
// 달되는 것과 동일하다. 그래서 useCallback 사용함
// 하지만 useCallback도 조심히 사용해야함. 한번 생성되면 메모리상에 계속 보관되기 때문에
// 진짜 필요할때만 사용해야함! (메모리에 무리감!)

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);
  
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
      });
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);
  
  return (
    <div className={styles.app}>
      <Search_header onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>}

        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
