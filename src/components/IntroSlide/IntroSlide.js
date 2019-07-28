import React from "react";
import "./introSlide.css";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function IntroSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="intro-bg">
        <div className="title-pres">INTRODUCTION</div>
        <List className="list-pres" size="huge" bulleted>
          <List.Item className="list-item-pres list-item-dot-pres">Purpose of Project</List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Goals of Project (SMART Goals)
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">Demo</List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Known Risks and Limitations
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">Lessons Learned</List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default IntroSlide;
