import React from "react";
import { Slide } from "pure-react-carousel";
import "./purposeSlide.css";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";

function PurposeSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">PURPOSE OF PROJECT</div>
        <div className="text-area-pres">
          Build the technical foundations for an API-driven, modern Channel
          Portal for Agents and Resellers to utilize Rev.io's billing and back
          office features. This quarter focused on developing a prototype that
          lays the groundwork for a fully featured portal for customers.
        </div>
        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default PurposeSlide;
