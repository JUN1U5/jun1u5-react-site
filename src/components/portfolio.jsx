import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Cells from '../img/cells_1920.jpg';
import Giant from '../img/SelfishGiant1888.png';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="portfolio-section" data-section="portfolio">
          <Container>
            <h2 className="label-h2">Writing</h2>
            <Row>
              <Card>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    width="auto"
                    height="200px"
                    src="https://static-01.hindawi.com/styles/hindawi_wide/s3/2020-10/AI-in-Manuscripts_blog (1).jpg"
                  />
                  <Card.Body>
                    <Card.Title>
                      Artificial intelligence in manuscript preparation
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Way back in 2020, Kurt Spurlock and I speculated about
                        how publishers and authors might benefit from AI in the near future.
                      </p>
                      <p className="accent"><a href="https://www.hindawi.com/post/artificial-intelligence-manuscript-preparation/" target="_blank">Read more...</a></p>
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img
                    className="card-img"
                    variant="bottom"
                    width="auto"
                    height="200px"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg"
                  />
                  <Card.Body>
                    <Card.Title>On Conrad's sea fiction</Card.Title>
                    <Card.Text>
                      <p>
                        At a moment in imperial history when the recognition of
                        global interdependence and antagonism threatens the
                        ideological, economic, and political underpinnings of
                        imperialism, Conrad adapts the flexibility of sea
                        fiction to confront this mounting pressure on the
                        imperial consciousness.
                      </p>
                      <p className="accent"><a href="https://olh.openlibhums.org/article/id/4446/" target="_blank">Read more...</a></p>
                    </Card.Text>
                    <div className="card-footer">
                      <span className="badge bg-dark p-2">
                        <FontAwesomeIcon icon={faCheckCircle} />&nbsp; Peer Reviewed
                      </span>
                      <span className="badge bg-secondary p-2">
                        <FontAwesomeIcon icon={faUnlock} />&nbsp; CC BY 4.0
                      </span>
                    </div>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img
                    className="card-img"
                    variant="bottom"
                    width="auto"
                    height="200px"
                    src={Giant}
                  />
                  <Card.Body>
                    <Card.Title>The fairy tales of Oscar Wilde</Card.Title>
                    <Card.Text>
                      <p>
                        By undermining the core generic expectations of the
                        fairy tale, Wilde exposes both the instrumental logic of
                        colonialism and the unrealizable longing, on the part of
                        the colonized, for a national identity uncorrupted by
                        colonial trauma.
                      </p>
                      <p className="accent"><a href="https://www.researchgate.net/publication/314500920_%27Suffer_the_little_children%27_Irish_revivalism_and_the_fairy_tales_of_Oscar_Wilde" target="_blank">Read more...</a></p>
                    </Card.Text>
                    <div className="card-footer">
                      <span className="badge bg-dark p-2">
                        <FontAwesomeIcon icon={faCheckCircle} />&nbsp; Peer Reviewed
                      </span>
                      <span className="badge bg-secondary p-2">
                        <FontAwesomeIcon icon={faUnlock} />&nbsp; Preprint
                      </span>
                    </div>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img
                    className="card-img"
                    variant="bottom"
                    width="auto"
                    height="200px"
                    src={Cells}
                  />
                  <Card.Body>
                    <Card.Title>Writing Tips</Card.Title>
                    <Card.Text>
                      <p><a href="https://www.aje.com/en/arc/">AJE Scholar</a> articles on common grammar issues in scientific writing:</p>
                      <ul>
                      <li><a href="https://www.aje.com/arc/editing-tip-few-vs-few/">"A Few vs. Few"</a></li>
                      <li><a href="https://www.aje.com/arc/editing-tip-singular-and-plural-forms-scientific-writing/">"Singular and Plural Forms in Scientific Writing"</a></li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
              </Card>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
