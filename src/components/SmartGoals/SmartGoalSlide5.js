import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSlide5(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <List className="list-pres">
          <List.Item className="list-item-pres list-item-dot-pres">
            Finalize Reseller Architecture Design
            <List>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (23) Complete design for Bill Profiles-to-Users relationship
                </List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="square outline" />
                <List.Content className="strikethrough">
                  (24) Determine grouping strategy for Bill Profiles, if any
                </List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (25) Decide how to enforce at least one Profile on Reseller
                  User
                </List.Content>
              </List.Item>
            </List>
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSlide5;
