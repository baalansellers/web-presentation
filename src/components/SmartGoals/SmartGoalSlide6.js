import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSlide6(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <List className="list-pres">
          <List.Item className="list-item-pres list-item-dot-pres">
            Enhance the REST API by implementing the following actions:
            <List>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (26) Get Journal Entries by Ticket ID
                </List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(27) Create Journal Entries</List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(28) Get Recent Customers</List.Content>
              </List.Item>
            </List>
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSlide6;
