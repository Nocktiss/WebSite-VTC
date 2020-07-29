import React from "react";
// Route
import { Row, Col, Container } from "react-bootstrap";
// Utils
// Custom components

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const Home = () => {
  return (
    <>
      <Container fluid style={styles.grid}>
        <Row style={styles.row}>
          <Col style={styles.col}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
