import React from "react";
import crow from "./gentle-crow-sir.jpg";
import { Slide } from "pure-react-carousel";
import { Image } from "semantic-ui-react";

function FunSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="App">
        <header className="App-header">
          <Image src={crow} size="big" centered />
        </header>
      </div>
    </Slide>
  );
}

export default FunSlide;