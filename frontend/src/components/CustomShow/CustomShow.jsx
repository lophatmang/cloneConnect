import React, { useRef } from "react";

import classes from "./CustomShow.module.css";

import { useMediaQuery } from "@mui/material";
import { Show } from "react-admin";

import Header from "./Header";
import Video from "./Video";
import Map from "./Map";
import VideoPlayer from "./VideoPlayer";
import FilesMenu from "./FilesMenu";
import { useOnClickOutSide } from "../../hooks/useOnClickOutSide";

const CustomShow = () => {
  const [show, setShow] = React.useState("video");
  const [showFilesMenu, setShowFilesMenu] = React.useState(false);
  const isMobileScreen = useMediaQuery("(max-width: 1440px)"); //From 1024px and below screen will count as mobile

  const videoRef = useRef();
  const filesMenuRef = useRef();

  const showMap = () => {
    setShow("map");
  };

  const showVideo = () => {
    setShow("video");
  };

  const toggleFilesMenu = () => {
    setShowFilesMenu(!showFilesMenu);
  };

  useOnClickOutSide(filesMenuRef, () => toggleFilesMenu());

  return (
    <Show>
      <div className={classes.content}>
        <Header />

        <div className={classes.content_buttons}>
          <div
            className={`${classes.content_buttons_group} ${classes.content_buttons_group_left}`}
            color="primary"
          >
            <button
              className={show === "map" ? classes.inactive : ""}
              onClick={showVideo}
            >
              Video
            </button>
            <button
              className={show === "video" ? classes.inactive : ""}
              onClick={showMap}
            >
              Map
            </button>
          </div>

          <div className={`${classes.content_buttons_group} `} color="primary">
            <button className={classes.content_buttons_files} onClick={toggleFilesMenu}>
              Files
              {showFilesMenu && <div ref={filesMenuRef}>
                <FilesMenu />
              </div>}
            </button>
            <button>More info</button>
          </div>
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
