import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            /*
                아래 코딩 안에 매개변수는 실행이 된 다음엔 사라진다
                하지만 호출 된 후 리턴된 값을 (예로 클릭 이벤트가 일어났을때 호출 되는 요소의 결과 값({김구라, 0}, {원숭이, 1})
                기억하고 있기 때문에 onDelete(index) 의 index 에는 기억된 인덱스 값이 전달된다.
            */
            <>
               <h3>목록입니다</h3> 
               <ul>
                {this.props.names.map((item, index)=><li key={index}>{item}<button onClick={()=>{
                    // x 버튼을 누르면 실행되는 함수 내부
                    this.props.onDelete(index)
                }}>x</button></li>)}
               </ul>
            </>
        );
    }
}

export default List;