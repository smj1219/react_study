// App.css 적용하기 (내부 css)
import { useState } from 'react';
import './App.css'


//함수형 component
function App2() {
  console.log("App 함수가 호출됨!")

  //여러개의 값을 한 번에 관리 할 수 있는 object 로 상태값 관리하기
  const [state, setState] =useState({
    count:0,
    name:"김구라"
  })

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <button onClick={()=>{
        setState({
            ...state, //기존의 상태값을 펼쳐놓고
            count:state.count+1 //수정할 값만 수정된 새로운 object 로 상태값을 변경한다.
        })
      }}>{state.count}</button>
      <p>내이름은 <strong>{state.name}</strong></p>
      <button onClick={()=>{
        setState({
            ...state,
            name:"원숭이"
        })
      }}>이름 변경</button>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App2;