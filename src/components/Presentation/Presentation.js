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
import DemoCPPSlide from "../DemoSlide/DemoCPPSlide";
import DemoStorybookSlide from "../DemoSlide/DemoStorybookSlide";
import KnownRisksSlide from "../KnownRisksSlide/KnownRisksSlide";
import LessonsSlide from "../LessonsSlide/LessonsSlide";
import WowSlide from "../WowSlide/WowSlide";

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
      <WowSlide index={2} />
      <IntroSlide index={3} />
      <PurposeSlide index={4} />
      <KeywordSlide index={5} />
      <SmartGoalSlide1 index={6} />
      <SmartGoalSlide2 index={7} />
      <SmartGoalSlide3 index={8} />
      <SmartGoalSlide4 index={9} />
      <SmartGoalSlide5 index={10} />
      <SmartGoalSlide6 index={11} />
      <SmartGoalSummarySlide index={12} />
      <DemoStorybookSlide index={13} />
      <DemoCPPSlide index={14} />
      <KnownRisksSlide index={15} />
      <LessonsSlide index={16} />
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
