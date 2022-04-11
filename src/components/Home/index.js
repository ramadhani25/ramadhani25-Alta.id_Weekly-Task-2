import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = ({ data }) => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col className="py-5 px-2">
            <h2>{data.title}</h2>
            <p
              className="my-3"
              style={{ textAlign: "justify", fontSize: "0.8rem" }}
            >
              {data.desc}
            </p>
            <Container fluid className="text-center pt-3">
              <img
                className="img-fluid rounded float-left"
                src={process.env.PUBLIC_URL + `/assets/image/${data.img}`}
                alt={data.title}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
