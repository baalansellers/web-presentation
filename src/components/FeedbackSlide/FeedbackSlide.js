import React from "react";
import haters from "./haters.jpg";
import { Slide } from "pure-react-carousel";
import { Image } from "semantic-ui-react";

function FeedbackSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="App">
        <header className="App-header">
          <Image src={haters} size="large" centered />
          <p>Feedback?</p>
        </header>
      </div>
    </Slide>
  );
}

export default FeedbackSlide;