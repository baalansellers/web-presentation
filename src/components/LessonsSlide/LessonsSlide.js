import React from "react";
import { Slide } from "pure-react-carousel";
import { List } from "semantic-ui-react";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function LessonsSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">LESSONS LEARNED</div>
        <List className="list-pres" bulleted>
          <List.Item className="list-item-pres list-item-dot-pres">
            React is prone to decision fatigue (although we were warned)
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Current REST API strategy could use some work
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            API should not return file data within the model (usually)
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            If you Eject, keep an eye on config files as vendor packages update
          </List.Item>
          <List.Item className="list-item-pres list-item-dot-pres">
            Semantic UI React is sooo much fun!
          </List.Item>
        </List>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default LessonsSlide;
