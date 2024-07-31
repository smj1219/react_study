// import 된 css 는 모든 component 에서 공통적으로 사용할 수 있다. (defalut 동작)
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Play from './components/Play';
import Study from './components/Study';
import Study2 from './components/Study2';


//함수형 component
function App() {

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <div className="box">App.js box</div>   
      <button className='btn btn-primary'>버튼</button>
      <Play/> 
      <Study/>
      <Study2/>
    </div>
  );
}


export default App;
