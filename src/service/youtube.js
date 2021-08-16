class Youtube {
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBoItPoaPP0Gaerbg1NVtE3CUF20Bsfml0`,
            this.getRequestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
    }

    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBoItPoaPP0Gaerbg1NVtE3CUF20Bsfml0`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }
}

export default Youtube;