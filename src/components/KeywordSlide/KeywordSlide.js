import React from "react";
import { Slide } from "pure-react-carousel";

function KeywordSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">PURPOSE OF PROJECT</div>
        <div className="keyword-pres">
          Key Word: <span className="highlight-pres">Prototype</span>
        </div>
      </div>
    </Slide>
  );
}

export default KeywordSlide;
