import React from "react";
import "./titleSlide.css";
import logo from "./Revio-Logo.png";
import jordan from "./Jordan-Green.png";
import dennis from "./Dennis-Blue.png";
import dan from "./Dan-Red.png";
import alan from "./Alan-Orange.png";
import { Slide } from "pure-react-carousel";
import { Card, Image } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function TitleSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="title-bg">
        <img className="title-logo" src={logo} alt="Rev.io Logo" />
        <p className="title">Platform Team Quarterly Project Review</p>
        <p className="title">Q3 Team Presentation</p>
        <p className="date">Tuesday, July 30th, 2019</p>
        <Card.Group className="power-ranger-group">
          <Card className="power-ranger-card">
            <Image
              className="power-ranger"
              src={alan}
              wrapped
              ui={false}
              size="tiny"
            />
            <Card.Content>
              <Card.Header textAlign="center" className="power-ranger-text">
                Alan
              </Card.Header>
            </Card.Content>
          </Card>
          <Card className="power-ranger-card">
            <Image className="power-ranger" src={dennis} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign="center" className="power-ranger-text">
                Dennis
              </Card.Header>
            </Card.Content>
          </Card>
          <Card className="power-ranger-card">
            <Image className="power-ranger" src={dan} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign="center" className="power-ranger-text">
                Dan
              </Card.Header>
            </Card.Content>
          </Card>
          <Card className="power-ranger-card">
            <Image className="power-ranger" src={jordan} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign="center" className="power-ranger-text">
                Jordan
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default TitleSlide;
