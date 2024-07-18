import React, { Component } from 'react';

class child extends Component {
    render() {
        return (
            <div>
                <h3>Child Component 입니다</h3>
                <button onClick={(e)=>{
                    e.target.innerText="Clicked!!"
                }}>눌러보셈</button>
            </div>
        );
    }
}

export default child;