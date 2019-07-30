import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSlide3(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <List className="list-pres">
          <List.Item className="list-item-dot-pres">
            It will framework the following page components:
            <List>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(5) Home/Dashboard</List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(6) Recent Customers</List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (7) Profile Editor (name, username, email, password)
                </List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(8) Search Results</List.Content>
              </List.Item>
            </List>
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSlide3;
