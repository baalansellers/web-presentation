import React, { useState } from "react";
import { Slide } from "pure-react-carousel";
import { Embed, Button, Icon, Grid } from "semantic-ui-react";
import "./demoSlide.css";

function DemoStorybookSlide(props) {
  const [isActive, setIsActive] = useState(false);
  const handleStopClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Slide index={props.index}>
      <div className="demo-bg">
        <div className="title-demo">
          <Grid columns={2} divided="vertically">
            <Grid.Row style={{ height: "calc(1em + 5vh)", paddingBottom: "0" }}>
              <Grid.Column
                width={12}
                verticalAlign="middle"
                style={{ marginBottom: "0" }}
              >
                DEMO - STORYBOOK
              </Grid.Column>
              <Grid.Column
                width={3}
                verticalAlign="middle"
                textAlign="right"
                style={{ marginBottom: "0" }}
              >
                <Button
                  onClick={handleStopClick}
                  icon
                  labelPosition="left"
                  // floated="right"
                  color="red"
                  disabled={!isActive}
                >
                  <Icon name="square" />
                  Stop
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Embed
          active={isActive}
          url="http://192.168.1.192:54900/"
          iframe={{ scrolling: "yes", class: "embed-iframe" }}
          onClick={handleStopClick}
        />
      </div>
    </Slide>
  );
}

export default DemoStorybookSlide;
