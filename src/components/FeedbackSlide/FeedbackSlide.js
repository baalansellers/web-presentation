import React from "react";
import feedbackImg from "./feedbackwelcome.jpg";
import alanImg from "./alan_cartoon_250 round.png";
import { Slide } from "pure-react-carousel";
import { Image, Label } from "semantic-ui-react";

function FeedbackSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="App">
        <header className="App-header">
          <p>Feedback? | Questions?</p>
          <Image src={feedbackImg} size="large" centered />
          <p>
            <Label
              as="a"
              size="big"
              href="https://github.com/baalansellers/web-presentation"
              target="_blank"
            >
              <Image src={alanImg} spaced="right" />
              https://github.com/baalansellers/web-presentation
            </Label>
          </p>
        </header>
      </div>
    </Slide>
  );
}

export default FeedbackSlide;
