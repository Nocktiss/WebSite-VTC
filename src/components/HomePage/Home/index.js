import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../lib/Styled/Header";

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
  const { t } = useTranslation();

  return (
    <Container fluid style={styles.grid}>
      <Row style={styles.row}>
        <Col style={styles.col}>
          <Header>
            <p>{t("name_title")}</p>
          </Header>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
