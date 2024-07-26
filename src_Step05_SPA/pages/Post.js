import { Component } from 'react';
import axios from 'axios';

//클래스형 component
class Post extends Component{
  //상태값 (UI 에서 사용하는 데이터) 
  state={
    posts:[]
  }

  //Post 컴포넌트가 준비 완료 되었을때 최초 한번 호출되는 함수(개발환경에서는 2번)
  componentDidMount(){
    this.getPosts();
  }

  //Post 컴포넌트가 비활성화 되기 직전에 호출되는 함수 
  componentWillUnmount(){
    console.log("Post 컴포넌트에서 무언가 마무리 작업을 합니다!")
  }
  
  //전체 글 목록을 받아오는 함수 
  getPosts = ()=>{
    /*
      axios 가 get 방식 "/v2/post " 요청을 대신해준다
      응답되는 json 문자열을 실제 array or object 로 변경을 해서
      then() 함수 안에 전달한 매개변수 res 에 넣어준다
      res 는 object 이고 res 는 data 라는 방에 array or object 가 들어있다.
    */
    axios.get("/v2/post")
    .then(res=>{
      console.log(res)
      this.setState({
        posts : res.data
      })
    })
  }

  render(){
    return (
      <div className="container">
        <h3>새글 작성 폼</h3>
        <form action="/v2/post" method="post" onSubmit={(e)=>{
          e.preventDefault();//폼 전송 막기 
          //요청 url 
          const url=e.target.action;
          //전송할 폼 데이터
          const formData=new FormData(e.target);
          //FormDate 에 들어있는 내용을 이용해서 json 문자열 만들어내기
          const formObject = {};
          formData.forEach((value, key)=>{
            formObject[key]=value;
          });
          const jsonString = JSON.stringify(formObject);


          /*
            object 를 json 문자열로 변경할 필요없이 objsct 를 두번째 인자로 전달하거나 
            query 문자열을 전달하면 된다 (두가지 다 가능)

            axios.post(요청 url, object or query 문자열)
          */
            axios.post(url, formObject)
          .then(res=>{
            this.getPosts()
          })
        }}>
          <input type="text" name="title" placeholder='제목...'/>
          <input type="text" name="author" placeholder='작성자...'/>
          <button type="submit">저장</button>
        </form>
        <h3>글 목록입니다</h3>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(item => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td><button onClick={()=>{
                  const title=prompt(item.id+" 번글의 수정할 제목 입력...")
                  //수정할 정보를 FormData 객체에 담는다.
                  const obj= {
                    title:title,
                    author:item.author
                  }
                  /*
                    axios.put(요청 url, object)
                  */
                  axios.put("/v2/post/"+item.id, obj)
                  .then(res=>{
                    this.getPosts()
                  })

                }}>수정</button></td>
                <td><button onClick={()=>{
                 axios.delete("/v2/post/"+item.id)
                 .then(res=>{
                    this.setState({
                      posts:this.state.posts.filter(it=>res.data.id !== it.id)
                    })
                 })
                 .catch(err=>{
                    console.log(err)
                 })
                }}>x</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Post;