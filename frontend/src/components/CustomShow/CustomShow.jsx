import React, { useRef } from "react";

import classes from "./CustomShow.module.css";

import { ButtonGroup, Button, useMediaQuery } from "@mui/material";
import { Show } from "react-admin";

import Header from "./Header";
import Video from "./Video";
import Map from "./Map";
import VideoPlayer from "./VideoPlayer";

const CustomShow = () => {
  const [show, setShow] = React.useState("video");
  const isMobileScreen = useMediaQuery("(max-width: 1024px)"); //From 1024px and below screen will count as mobile

  const videoRef = useRef();


  const btnNormal = {
    bgcolor: "#3a3a3a",
    color: "#dfdfdf",
    border: "solid 1px rgba(255, 255, 255, 0.1) !important",
    "&:hover": {
      bgcolor: "#3a3a3a",
      color: "#dfdfdf",
    },
  };

  const btnActive = {
    bgcolor: "#3a3a3a",
    color: "#ffffff",
    fontWeight: "bold",
    border: "solid 1px rgba(255, 255, 255, 0.1) !important",
    "&:hover": {
      bgcolor: "#3a3a3a",
      color: "#dfdfdf",
    },
  };

  const showMap = () => {
    setShow("map");
  };

  const showVideo = () => {
    setShow("video");
  };

  return (
    <Show>
      <div className={classes.content}>
        <Header />

        <div className={classes.content_buttons}>
          <ButtonGroup
            className={classes.content_buttons_group}
            variant="contained"
            color="primary"
          >
            <Button
              onClick={showVideo}
              sx={show === "video" ? btnActive : btnNormal}
            >
              Video
            </Button>
            <Button
              onClick={showMap}
              sx={show === "map" ? btnActive : btnNormal}
            >
              Map
            </Button>
          </ButtonGroup>

          <ButtonGroup variant="contained" color="primary">
            <Button sx={btnNormal}>Files</Button>
            <Button sx={btnNormal}>More info</Button>
          </ButtonGroup>
        </div>

        <div className={classes.content_main}>
          {isMobileScreen ? (
            <>
              <div className={classes.content_main_wrapper}>
                {show === "video" && <Video ref={videoRef} />}
                {show === "map" && <Map />}
              </div>
              <VideoPlayer videoRef={videoRef} />
            </>
          ) : (
            <>
              <div className={classes.content_main_wrapper}>
                <Video ref={videoRef} />
                <Map />
              </div>
              <VideoPlayer videoRef={videoRef} />
            </>
          )}
        </div>
      </div>
    </Show>
  );
};

export default CustomShow;
