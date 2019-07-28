import React from "react";
import { Slide } from "pure-react-carousel";
import { Embed } from "semantic-ui-react";
import "./demoSlide.css";

function DemoSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="demo-bg">
        <div className="title-demo">DEMO</div>

        <Embed
          url="http://localhost:3000/"
          iframe={{ scrolling: "yes", class: "embed-iframe" }}
        />
      </div>
    </Slide>
  );
}

export default DemoSlide;
