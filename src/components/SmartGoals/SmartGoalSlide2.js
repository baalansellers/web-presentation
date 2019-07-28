import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSlide2(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <List className="list-pres">
          <List.Item className="list-item-pres list-item-dot-pres">
            <List.Icon name="check square outline" />
            <List.Content>(4) It will framework main navigation</List.Content>
            <br />
            Consisting of:
            <List>
              <List.Item className="list-item-dot-pres">
                Home/Dashboard Link
              </List.Item>
              <List.Item className="list-item-dot-pres">
                Recent Customer Link
              </List.Item>
              <List.Item className="list-item-dot-pres">
                My Profile link
              </List.Item>
              <List.Item className="list-item-dot-pres">
                Simple search control prototype
              </List.Item>
            </List>
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSlide2;
