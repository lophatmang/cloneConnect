import React from "react";

import classes from "./CustomShow.module.css";

import { ButtonGroup, Button, useMediaQuery } from "@mui/material";
import { Show } from "react-admin";

import CustomShowHeader from "./Header";
import Video from "./Video";
import Map from "./Map";

const CustomShow = () => {
  const [show, setShow] = React.useState("video");
  const isMobileScreen = useMediaQuery("(max-width: 1024px)"); //From 1024px and below screen will count as mobile

  const showMap = () => {
    setShow("map");
  };

  const showVideo = () => {
    setShow("video");
  };

  return (
    <Show>
      <div className={classes.content}>
        <CustomShowHeader />

        <div className={classes.content_buttons}>
          <ButtonGroup
            className={classes.content_buttons_group}
            variant="contained"
            color="primary"
          >
            <Button onClick={showVideo} variant={show === "video" ? "outlined" : "contained"}>Video</Button>
            <Button onClick={showMap} variant={show === "map" ? "outlined" : "contained"}>Map</Button>
          </ButtonGroup>

          <ButtonGroup variant="contained" color="primary">
            <Button>Files</Button>
            <Button>More info</Button>
          </ButtonGroup>
        </div>
        
        <div className={classes.content_main}>
          {isMobileScreen ? (
            <>
              {show === "video" && (
                <Video />
              )}
              {show === "map" && (
                <Map />
              )}
            </>
          ) : (
            <>
              <Video/>
              <Map/>
            </>
          )}
        </div>
      </div>
    </Show>
  );
};

export default CustomShow;
