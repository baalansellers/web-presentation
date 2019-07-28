import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSummarySlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">100% GOAL COMPLETION</div>
        <List className="list-pres" bulleted>
          <List.Item className="list-item-pres list-item-dot-pres">
            Original Goals: 28
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Invalidated Goals: 2
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Adjusted Goals: 26
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Completed Goals: 26
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSummarySlide;
