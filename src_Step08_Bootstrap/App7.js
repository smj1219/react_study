import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function App7() {
    //모달 창을 띄울지 여부를 상태값으로 관리하기
    const [isModalShow, setModalShow] = useState(false);

    return (
        <Container>
            <h3>모달 테스트</h3>
            <Button variant="success" onClick={()=>setModalShow(true)}>자세히 보기</Button>
            <MyModal show={isModalShow} onHide={() => setModalShow(false)}/>
        </Container>

    );
}
function MyModal(props) {


    return (
    
        <Modal show={props.show} onClick={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" >
              Close
            </Button>
            <Button variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
export default App7;