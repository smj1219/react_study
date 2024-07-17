import logo from './logo.svg';
import './App.css';
/*
    jsx 객체는 javascript + xml(마크업) 이 혼합되어있는 객체다.
    jsx 객체를 사용하는 표현식이 있는 파일을 jsx 파일이라고 한다.
    따라서 파일명을 지을때는 xxx.jsx  App.jsx 로 짓는 것이 정석이지만
    xxx.js 로 지어도 react 개발환경에서 알아서 처리 해 준다.
*/
function App() {
  const p1 = <p>안녕하세요</p>;
  const button1 = <button onClick={()=>{
    alert("버튼을 눌렀네?")
  }}>눌러보셈</button>
  const myName="김구라";
  //적용할 css 값을 가지는 object 를 미리 안들어 놓고 적용시킬 수도 있다.
  const myStyle={
    color:"red",
    width:"100px",
    height:"100px",
    backgroundColor:"yellow"
  }
  // jsx 객체가 여러개 들어있는 배열
  const datas = [
    <li>김구라</li>,
    <li>해골</li>,
    <li>원숭이</li>
  ];
  // 서버에서 받아온 데이터라고 가정하자
  const names=["김구라", "해골", "원숭이"];
  const datas2=names.map((item)=>{
    return <li>{item}</li>
  })
  //위 내용을 람다함수로 줄인 내용
  const datas3=names.map(item=><li>{item}</li>)

  // jsx 객체 안에서 javascript 영역은 { } 로 만든다
  return (
    <div className="container">
      {/* 여기는 주석입니다. */}
      <h1>인덱스 페이지입니다</h1>
      {p1}
      {button1}
      <p>내 이름은 <strong>{myName}</strong></p>
      <div style={{
        color:"red",
        width:"100px",
        height:"100px",
        backgroundColor:"yellow"
      }}>box</div>
      <br/> {/* xml 파일에서는 개행요소를 닫아줘야한다 */}
      <div style={myStyle}>box2</div>
      <ul>{datas}</ul>
      <ul>{datas2}</ul>
      <ul>{datas3}</ul>
      <ul>
        {names.map(item=><li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
