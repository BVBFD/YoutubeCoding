import React, { memo } from 'react';
import styles from './video_item.module.css';

// props이 바뀌지 않는다면 다시 업데이트될 필요가 없이 렌더링 불필요 하다면 memo이용하면 됨
// 전달되는 props이 변경되지 않으면 re-render가 되지 않고 props이 바뀌면 render되는 아이
const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => 
{
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (<li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
        <img 
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url} 
            alt="video thumbnail" 
        />

        <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    </div>
</li>
)}
);

export default VideoItem;