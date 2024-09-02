import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Post() {

    const navigate = useNavigate()

    const [post, setPost] = useState([])

    const refresh=()=>{
        axios.get("/post")
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        refresh()
    }, [])

    return (
        <>
            <h1>Post 목록입니다.</h1>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>삭제</th>
                        <th>수정</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map(item=><tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td><button >삭제</button></td>
                        <td><button >수정</button></td>
                    </tr>)}
                </tbody>
            </Table> 
        </>
    );
}

export default Post;