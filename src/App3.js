import axios from "axios"
import { useRef, useState } from "react"


function App3() {
    //input 요소의 참조값을 활용
    const inputFile = useRef()
    const inputTitle = useRef()
    //서버에서 응답된 업로드된 아미지에 대한 정보를 state 로 관리하기 위해
    const [previewImage, setPreviewImage]=useState({})

    

    //업로드 버튼을 눌렀을 때 호출되는 함수
    const handleUpload=()=>{
        //FormData 객체를 생성해서
        const formData = new FormData()
        //선택한 파일을 "image" 라는 파라미터명으로 담고
        formData.append("image", inputFile.current.files[0])
        formData.append("title", inputTitle.current.value)
        //axios 를 이용해서 multipath 요청을 보낸다
        axios.post("/image/upload", formData,{
            headers: {
            "Content-Type":"multipart/form-data"
            }
        })
        .then(res=>{
            console.log(res.data)
            //응답된 데이터를 state 에 반영하기
        })
        .catch(error=>{
            console.log(error)
        })
    }
    //파일을 선택했을때 호출되는 함수
    const imageChange=(e)=>{
        //선택한 파일
        const file=e.target.files[0];
		//파일로 부터 데이터를 읽어들일 객체 생성
		const reader=new FileReader();
		//파일 배열의 0 번방에 있는 파일을 data url 형식으로 읽어들인다 (비동기 처리 방식)
		reader.readAsDataURL(file);
		//다 읽었을때 실행할 함수 등록
		reader.onload=(event)=>{
			//읽은 문자열(data url 형식의 긴 문자열) 얻어내기
			const data=event.target.result; 
                 
			setPreviewImage(data)
		};
    }

    //img 요소에 적용할 인라인 css object
    const imgstyle={
        width:"200px",
        borderRadius:"10px"
    }
    return (
        <div>
            <h3>이미지 업로드 테스트</h3>
            <p>
                이미지를 선택하면 선택된 이미지가 바로 보이도록 하고
                업로드 버튼을 누르면 spring boot 서버에 입력한 제목과 이미지가
                전송되도록 프로그래밍 해보세요.
                요청 url 은 "/image/upload2" 로 설정하세요.
            </p>
            <input type="text" placeholder="제목..." ref={inputTitle} />
            <br />
            <input type="file" accept="image/*" ref={inputFile} onChange={imageChange} />
            <br />
            { previewImage && <img src={previewImage} style={imgstyle} alt="선택한 이미지 미리보기" /> } 
            <br />
            <button onClick={handleUpload}>업로드</button>
            {

            }
        </div>
    );
}

export default App3;