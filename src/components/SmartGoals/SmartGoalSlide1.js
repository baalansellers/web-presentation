import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";

function SmartGoalSlide1(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">SMART GOALS</div>
        <List className="list-pres" bulleted>
          <List.Item className="list-item-pres list-item-dot-pres">
            Implement an Alpha version of the CPP SPA
            <List>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>(1) It will be mobile friendly</List.Content>

                <List>
                  <List.Item className="list-item-dot-pres">
                    Scaling back by display size
                  </List.Item>
                  <List.Item className="list-item-dot-pres">
                    Touch capable
                  </List.Item>
                </List>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (2) It will be globalized for labeling &amp; currency
                  formatting
                </List.Content>
              </List.Item>
              <List.Item className="list-item-dot-pres">
                <List.Icon name="check square outline" />
                <List.Content>
                  (3) It will use basic auth for API interactions
                </List.Content>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </div>
    </Slide>
  );
}

export default SmartGoalSlide1;
