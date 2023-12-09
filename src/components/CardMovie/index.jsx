import { Button, Card, Col } from "react-bootstrap";

const CardMovie = ({ sm, md, lg, xl, image, name, description, handleViewMore }) => {
  return (
    <Col sm={sm} md={md} lg={lg} xl={xl} style={{ marginBottom: "2rem" }}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={image}
          height={400}
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </Card.Text>
          <Button variant="primary" onClick={handleViewMore}>Xem thêm</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMovie;
