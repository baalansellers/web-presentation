import React from "react";
import { Slide } from "pure-react-carousel";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";
import arImage from "./Action-Reducer-Visual.gif";
import "./codeSlides.css";
import { Image, Grid, List, Divider } from "semantic-ui-react";

function ActionReducerSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">CODE STANDARDS</div>
        <Divider hidden />
        <Divider hidden />
        <Grid>
          <Grid.Column width={6}>
            <Image src={arImage} size="huge" centered />
          </Grid.Column>
          <Grid.Column width={10}>
            <List className="list-right-of-image">
              <List.Item>
                1. View transmits Action to Dispatcher
              </List.Item>
              <List.Item>
                2. Dispatcher fetches from API
              </List.Item>
              <List.Item>
                3. Reducer transforms JSON to Model
              </List.Item>
              <List.Item>
                4. View uses Model for display
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default ActionReducerSlide;
