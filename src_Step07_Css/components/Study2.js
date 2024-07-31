import React from 'react';

/*
    특정 component 에만 적용될 외부 css 파일을 만들떄는 xxx.module.css 형태로 만들어야한다
    import 된 myCss 는 object 이다
    - object 의 구조
    {클래스명 : "변형된 클래스명", ...}
*/
import myCss from './css/study.module.css'

// classnames 를 import 해서 cn 이라는 이름으로 사용하기
import cn from 'classnames';
// 외부 css 를 바인딩해서 사용하게 도와주는 binder import
import binder from 'classnames/bind'

const cx= binder.bind(myCss)

function Study2(props) {
  
    return (
        <div>
            <h3>Study2 입니다</h3>
            <div className={cx('box')}>Study.js box</div>
            <p className={cx('bg-yellow')}>노란 배경</p>
            <div className={cx('box', 'bg-yellow')}>box</div>
            <div className={cx({box:true, 'bg-yellow':false})}>box</div>

        </div>
    );
}

export default Study2;