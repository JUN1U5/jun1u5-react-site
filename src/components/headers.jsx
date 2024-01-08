import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";

export default class Headers extends Component {
  render() {
    return (
      <div>
        <section className="headers-section" data-section="headers">
        <Container>
          <Row>
          <p>some text explaining this section.</p>
          </Row>
          <Row>
            <div className="col-6 bg-dark border">
              <h1 className="text-light">Heading 1</h1>
              <h2 className="text-light">Heading 2</h2>
              <h3 className="text-light">Heading 3</h3>
              <h4 className="text-light">Heading 4</h4>
            </div>
            <div className="col-6 bg-light border">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              </div>
          </Row>
        </Container>
        </section>
      </div>
    )
  }
}
