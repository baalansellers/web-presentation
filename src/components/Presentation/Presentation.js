import React, { useEffect } from "react";
import "../../App.css";
import { Slider, WithStore } from "pure-react-carousel";
import TitleSlide from "../TitleSlide/TitleSlide";
import IntroSlide from "../IntroSlide/IntroSlide";
import PurposeSlide from "../PurposeSlide/PurposeSlide";
import KeywordSlide from "../KeywordSlide/KeywordSlide";
import LoadingSlide from "../LoadingSlide/LoadingSlide";
import SmartGoalSlide1 from "../SmartGoals/SmartGoalSlide1";
import SmartGoalSlide2 from "../SmartGoals/SmartGoalSlide2";
import SmartGoalSlide3 from "../SmartGoals/SmartGoalSlide3";
import SmartGoalSlide4 from "../SmartGoals/SmartGoalSlide4";
import SmartGoalSlide5 from "../SmartGoals/SmartGoalSlide5";
import SmartGoalSlide6 from "../SmartGoals/SmartGoalSlide6";
import SmartGoalSummarySlide from "../SmartGoals/SmartGoalSummarySlide";
import DemoSlide from "../DemoSlide/DemoSlide";

function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  });
}

function Presentation(props) {
  useKeyboardEvent("ArrowRight", () => {
    if (props.currentSlide < props.totalSlides - 1) {
      props.carouselStore.setStoreState({
        currentSlide: props.currentSlide + 1
      });
    }
  });

  useKeyboardEvent("ArrowLeft", () => {
    if (props.currentSlide > 0) {
      props.carouselStore.setStoreState({
        currentSlide: props.currentSlide - 1
      });
    }
  });

  return (
    <Slider style={{ width: "100vw", height: "100vh" }}>
      <LoadingSlide index={0} />
      <TitleSlide index={1} />
      <IntroSlide index={2} />
      <PurposeSlide index={3} />
      <KeywordSlide index={4} />
      <SmartGoalSlide1 index={5} />
      <SmartGoalSlide2 index={6} />
      <SmartGoalSlide3 index={7} />
      <SmartGoalSlide4 index={8} />
      <SmartGoalSlide5 index={9} />
      <SmartGoalSlide6 index={10} />
      <SmartGoalSummarySlide index={11} />
      <DemoSlide index={12} />
    </Slider>
  );
}

export default WithStore(Presentation, state => ({
  currentSlide: state.currentSlide,
  disableAnimation: state.disableAnimation,
  hasMasterSpinner: state.hasMasterSpinner,
  imageErrorCount: state.imageErrorCount,
  imageSuccessCount: state.imageSuccessCount,
  lockOnWindowScroll: state.lockOnWindowScroll,
  masterSpinnerThreshold: state.masterSpinnerThreshold,
  naturalSlideHeight: state.naturalSlideHeight,
  naturalSlideWidth: state.naturalSlideWidth,
  orientation: state.orientation,
  slideSize: state.slideSize,
  slideTraySize: state.slideTraySize,
  step: state.step,
  dragStep: state.dragStep,
  totalSlides: state.totalSlides,
  touchEnabled: state.touchEnabled,
  dragEnabled: state.dragEnabled,
  visibleSlides: state.visibleSlides
}));
