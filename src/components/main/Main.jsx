import { HashLink } from "react-router-hash-link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main () {

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h1>Gallery</h1>
            <p>Lorem ipsum</p>
            <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
          </Col>
       </Row>
      </Container>
    </main>
  )
}