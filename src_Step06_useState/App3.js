import React, { useState } from 'react';

function App3() {
    // item 이 3개 들어있는 배열을 초기값으로 전달한 state 
    const [names, setNames] = useState(["김구라","해골","원숭이"])

    return (
        <div>
            <h1>배열을 state 로 관리해보기</h1>
            <button onClick={()=>{
                //setNames([...names, "주뎅이"])
                setNames(names.concat("주뎅이"))
            }}>추가</button>
            <ul>
                {names.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default App3;