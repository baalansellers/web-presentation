import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function KnownRisksSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">KNOWN RISKS &amp; LIMITATIONS</div>
        <List className="list-pres" bulleted>
          <List.Item className="list-item-pres list-item-dot-pres">
            Time
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Currently using Basic Auth
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Read-only integration with our REST API
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            REST API still needs many more endpoints
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Mobile usability could use more testing and tweaking
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            We are still new to React UI development
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default KnownRisksSlide;
