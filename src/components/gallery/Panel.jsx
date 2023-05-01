import { Col, Card, Image } from "react-bootstrap"
export default function Panel ({data: {id, content, name, website, cover}}) {

  return (
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
          <Image src={cover} fluid/>
        </figure>

        <div className="content">
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </Card>
    </Col>
  )
}