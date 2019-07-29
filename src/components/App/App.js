import React from "react";
import "./App.css";
import { CarouselProvider } from "pure-react-carousel";
import Presentation from "../Presentation/Presentation";

function App() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={21}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Presentation />
    </CarouselProvider>
  );
}

export default App;
