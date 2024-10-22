// pages/UserDetail.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserDetail() {
    //가입 회원 정보를 상태값으로 관리한다.
    const [userInfo, setUserInfo] = useState({})

    //컴포넌트가 활성화 되는 시점에 가입정보를 서버로 부터 읽어와서 UI 에 출력하기
    useEffect(()=>{
        axios.get("/user")
        .then(res=>{
            setUserInfo(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

    //프로필 이미지 스타일
    const profileStyle={
        width:"200px",
        height:"200px",
        border:"1px solid #cecece",
        borderRadius:"50%"
    }

    return (
        <>
            <h1>회원 가입 정보 입니다</h1>
            <table className="table table-bordered">
                <colgroup>
                    <col className="col-3"/>
                    <col className="col-9"/>
                </colgroup>
                <thead className="table-dark">
                    <tr>
                        <th>항목</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>{userInfo.userName}</td>
                    </tr>
                    <tr>
                        <td>ROLE</td>
                        <td>{userInfo.role}</td>
                    </tr>
                    <tr>
                        <td>이메일 주소</td>
                        <td>{userInfo.email}</td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <Link to="/user/password/edit">수정하기</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign:"middle"}}>프로필 이미지</td>
                        <td>
                            { 
                                userInfo.profile === null ? <svg style={profileStyle}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                : <img  style={profileStyle} src={`/upload/images/${userInfo.profile}`} alt="프로필 이미지" />
                            }                            
                        </td>
                    </tr>
                    <tr>
                        <td>가입일</td>
                        <td>{userInfo.regdate}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/user/edit">개인 정보 수정</Link>
        </>
    );
}

export default UserDetail;