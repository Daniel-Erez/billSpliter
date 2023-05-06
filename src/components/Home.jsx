import { useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useStorage";
import BillForm from "./BillForm";
import FriendList from "./FriendList";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'



function Home() {
  const [friendsList] = useLocalStorage("friends", [])
  if (friendsList.length == 0) location.replace("/friends")

  const [editIconHover, setEditIconHover] = useState(false)

  const editIconStyle = {
    width: editIconHover ? 20 : 16,
    height: editIconHover ? 20 : 16
  }

  const [fListOpen, fListSetOpen] = useState(false);

  return (<>
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex flex-row gap-2 align-items-center justify-content-between">
              <h5 role='button' onClick={() => fListSetOpen(!fListOpen)} aria-expanded={fListOpen} aria-controls="collapseOne">
                רשימת חברים
              </h5>
              <a href="/friends" className="m-0">
                <Figure className="m-0">
                  <Figure.Image className="m-0"
                    style={editIconStyle}
                    onMouseOver={() => setEditIconHover(true)}
                    onMouseOut={() => setEditIconHover(false)}
                    alt="16X16"
                    src="editIcon.png"
                  />
                </Figure>
              </a>
            </Card.Header>
            <Collapse in={fListOpen}>
              <div id="collapseOne" aria-labelledby="headingOne">
                <FriendList></FriendList>
              </div>
            </Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <BillForm></BillForm>
        </Col>
      </Row>

    </Container>
  </>)
}

export default Home