import React, { useRef, useState } from 'react';

function App7() {
    const [state, setState] = useState({
        names:[],
        seq:1
    })
    //useRef() hook을 이용해서 특정 요소의 참조값을 편하게 읽어올 수 있다.
    let inputName=useRef()

    return (
        <div>
            
            <input ref={inputName} type="text" placeholder='이름 입력...' />
            <button onClick={()=>{
                //inputName 은 object 이고 current 라는 key 값으로 input 요소의 참조값이 들어있다.
                console.log(inputName)
                setState({
                    ...state,
                    seq:state.seq+1,
                    names:[...state.names, {name:inputName.current.value, id:state.seq}]
                })
            }}>추가</button>
            <ul>
                {state.names.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
            <pre>{JSON.stringify(state,null,2)}</pre>

        </div>
    );
}

export default App7;