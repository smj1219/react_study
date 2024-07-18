
import { Component } from 'react';
//모든 컴포넌트에서 사용할 css 를 정의하고 사용하는 방법
import './App.css'

//클래스형 component
class App extends Component{

 
  render(){

    return (
      //클래스가 자바스트립트에서 예약어로 해석되기때문에 리액트에서는 className 으로 사용
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        <div className="box"></div>
      </div>
    )
  }
}

export default App;
