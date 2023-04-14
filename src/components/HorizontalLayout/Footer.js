import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Retail Insight.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
              Designed & Developed <i className="mdi mdi-heart text-danger"></i> by Softlabs
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
