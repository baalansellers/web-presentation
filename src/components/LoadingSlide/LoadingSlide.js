import React from "react";
import logo from "./Rev.io_Glyph_white.svg";
import "../../App.css";
import "./loadingSlide.css";
import { Slide } from "pure-react-carousel";

function LoadingSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="App">
        <header className="App-header">
          <object
            data={logo}
            type="image/svg+xml"
            className="Revio-logo-rotate"
          >
            Rev.io Glyph
          </object>
          <p>Loading...</p>
        </header>
      </div>
    </Slide>
  );
}

export default LoadingSlide;
