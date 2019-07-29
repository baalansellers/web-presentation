import React from "react";
import { Slide } from "pure-react-carousel";
import FlippyGlyph from "../FlippyGlyph/FlippyGlyph";
import { Divider, Grid, Image, List } from "semantic-ui-react";
import fileNameImg from "./FileNaming.png";

function NamingConventionSlide(props) {
  return (
    <Slide index={props.index}>
      <div className="purpose-bg">
        <div className="title-pres">CODE STANDARDS</div>
        <Divider hidden />
        <Divider hidden />
        <Grid>
          <Grid.Column width={5}>
            <Image src={fileNameImg} size="huge" centered />
          </Grid.Column>
          <Grid.Column width={11}>
            <List className="list-right-of-image">
              <List.Item>
                Folder: Pascal Case after component
              </List.Item>
              <List.Item>
                Component: filename &amp; function Pascal Case
              </List.Item>
              <List.Item>
                All Other: filename Camel Case
              </List.Item>
              <List.Item>
                *.messages.ts: Internationalization scripts
              </List.Item>
              <List.Item>
                *.story.ts: use cases for component in Storybook
              </List.Item>
              <List.Item>
                *.test.ts: unit tests for component
              </List.Item>
              <List.Item>
                Break out component styling into separate .css or .less
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <FlippyGlyph />
      </div>
    </Slide>
  );
}

export default NamingConventionSlide;
