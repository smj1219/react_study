import React, { Component } from 'react';

class fortune extends Component {
    render() {
        /*
            부모 conponent 가 전달한 property 는 자식 conponent 에서
            this.props 로 참조할 수 있다.
            예를 들어 부모 conponent 가 
            <Fortune data={'동쪽으로 가면 귀인을 만나요'}/>
            data 라는 property 명으로 string type '동쪽으로 가면 귀인을 만나요'
            를 전달 했다면
            자식 conponent 에서는 this.props.data 로 전달된 string type 을 사용할 수 있다.
        */
        return (
            <div>
                <h3>운세입니다</h3>
                <p>오늘의 운세<strong>{this.props.data}</strong></p>
            </div>
        );
    }
}

export default fortune;