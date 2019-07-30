import React from "react";
import { Slide } from "pure-react-carousel";
import { List, Grid } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function SmartGoalSlide4(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <p className="p-pres">Customer Details consisting of:</p>
        <Grid>
          <Grid.Column floated="left" width={8}>
            <List
              className="list-pres-two-column"
              style={{ marginLeft: "10vh" }}
            >
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(9) Base Page Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(10) Profile Display Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(11) Contacts Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(12) Notes Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(13) Addresses Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(14) Attachments Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(15) Bills Component</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <List className="list-pres-two-column">
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(16) Transactions Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(17) Payments Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(18) Services Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(19) Tickets Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="square outline" />
                <List.Content className="strikethrough">
                  (20) Tasks Component
                </List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(21) Orders Component</List.Content>
              </List.Item>
              <List.Item className="list-item-pres list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(22) Requests Component</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default SmartGoalSlide4;
