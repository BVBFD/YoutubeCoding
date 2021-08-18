class YoutubeFetch {
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    // constructor 생성자는 객체를 만드는 역할을 하는 함수다.
    // 함수 안에 생성자는 객체를 만들어 주기위해 만드는 것이고
    // 초기모델, 초기값이라고 이해하는 게 편함.
    // super는 자식 클래스의 생성자에서는 반드시 부모 생성자를 호출 시켜야 합니다. 그렇지 않게 되면 오류가 발생합니다. 
    // super를 이용해서 부모 생성자 호출, 생성자에게 필요한 괄호 안의 변수도 넘겨줍니다.

    // ex)
    // constructor(props) {
    // super(props);
    // this.state = {
    //     count: 0
    // }  
    // this.handleClickIncrement = this.handleClickIncrement.bind(this);
    // }

    // javascript 에서 this는 함수가 호출되는 방식에 따라 참조하는 객체가 결정된다.
    // 1. 객체의 메소드 형태로 호출되는 경우, this 는 객체 인스턴스를 참조한다.
    // 2. 일반 함수로 호출되는 경우, this 는 현재 실행 호스트의 전역 객체를 참조한다.
    // 3. 그러므로 constructor 에서 이벤트핸들러 메소드에 this(컴포넌트 인스턴스) 를 바인딩 해주어
    //    이벤트콜백 발생 시, 컴포넌트 참조가 가능하도록 해줘야 한다.

    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
    }

    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }
}

export default YoutubeFetch;