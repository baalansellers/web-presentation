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
                3. Dispatcher fetches from API
              </List.Item>
              <List.Item>
                4. Dispatcher tells Reducer it's waiting
              </List.Item>
              <List.Item>
                5. Reducer updates State, which updates the View
              </List.Item>
              <List.Item>
                6. Dispatcher tells Reducer it has data
              </List.Item>
              <List.Item>
                7. Reducer transforms data (JSON) into Model
              </List.Item>
              <List.Item>
                8. Reducer puts Model in state for View
              </List.Item>
              <List.Item>
                9. View uses Model for display
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
