import 'bootstrap/dist/css/bootstrap.css'
import 'holderjs'
import { Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap'

//원하는 범위의 숫자를 배열에 담아서 리턴하는 util 함수 만들어보기
function range(start, end){
    const nums = [];
    //반복문 돌면서 i가 start 에서 end 까지 1씩 증가하면서 변하도록하고
    for(let i=start; i<=end; i++){
        //그 숫자를 배열에 누적 시킨다
        nums.push(i)
    }
    //숫자가 누적된 배열을 리턴해준다
    return nums;
}

function App5() {

    const card1= {title:"제목1", content:"내용1"}
    const card2= {title:"제목2", content:"내용2"}
    const card3= {title:"제목3", content:"내용3"}
    const card4= {title:"제목4", content:"내용4"}

    // component 안에서 특정 이벤트가 발생했을 때 실행할 함수
    const handlerGo=()=>{
        alert("이동합니다.")
    }

    //출력할 페이지 번호라고 가정
    const pageNums=range(11, 20)
    //현재 페이지 정보라고 가정
    const currntPage=15;

    //페이지 링크를 눌렀을 때 실행할 함수
    const getPage=(pageNum)=>{
        alert(pageNum + "페이지로 이동합니다.")
    }

    return (
        <Container>
            <h3>card component</h3>
            <Row>
                <Col md={6} lg={3}>
                    <MyCard onGo={handlerGo} title={card1.title} content={card1.content}/>
                </Col>
                <Col md={6} lg={3}>
                    <MyCard onGo={handlerGo} title={card2.title} content={card2.content}/>
                </Col>
                <Col md={6} lg={3}>
                    <MyCard onGo={handlerGo} title={card3.title} content={card3.content}/>
                </Col>
                <Col md={6} lg={3}>
                    <MyCard onGo={handlerGo} title={card4.title} content={card4.content}/>
                </Col>
            </Row>
            <Pagination>
                <Pagination.Prev/>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item active={true}>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next/>
            </Pagination>
            <Pagination>
                <Pagination.Prev/>
                    {pageNums.map(item=><Pagination.Item onClick={()=>getPage(item)} key={item} active={item==currntPage}>{item}</Pagination.Item>)}
                <Pagination.Next/>
            </Pagination>
        </Container>
    );
}
function MyCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.content}
            </Card.Text>
            <Button variant="primary" onClick={()=>{props.onGo()}}>Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
export default App5;