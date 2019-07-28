import React from "react";
import { Slide } from "pure-react-carousel";
import "./wowSlide.css";

function WowSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="wow-bg" />
    </Slide>
  );
}

export default WowSlide;
