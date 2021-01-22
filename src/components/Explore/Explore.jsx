import React from "react";
import Map from '../../shared-components/Map/Map'
import { Container, Col, Row } from 'react-bootstrap'

function Explore() {
  return (
    <Container>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>

    </Container>
  );
}

export default Explore;
