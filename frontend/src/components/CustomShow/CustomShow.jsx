import React, { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Show } from "react-admin";
import { useOnClickOutSide } from "../../hooks/useOnClickOutSide";

import classes from "./CustomShow.module.css";

import Header from "./Header";
import Video from "./Video";
import Map from "./Map";
import VideoPlayer from "./VideoPlayer";
import FilesMenu from "./FilesMenu";
import InfoMenu from "./InfoMenu";

const CustomShow = () => {
  const [show, setShow] = React.useState("video");
  const [showFilesMenu, setShowFilesMenu] = React.useState(false);
  const [showInfoMenu, setShowInfoMenu] = React.useState(false);

  const isMobileScreen = useMediaQuery("(max-width: 1440px)"); //From 1024px and below screen will count as mobile

  const videoRef = useRef();
  const filesMenuRef = useRef();
  const infoMenuRef = useRef();

  const showMap = () => {
    setShow("map");
  };

  const showVideo = () => {
    setShow("video");
  };

  const toggleFilesMenu = () => {
    setShowFilesMenu(!showFilesMenu);
  };
  const toggleInfoMenu = () => {
    setShowInfoMenu(!showInfoMenu);
  };

  useOnClickOutSide(filesMenuRef, () => toggleFilesMenu());
  useOnClickOutSide(infoMenuRef, () => toggleInfoMenu());

  return (
    <Show>
      <div className={classes.content}>
        <Header videoRef={videoRef} />

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
              Bản đồ
            </button>
          </div>

          <div className={`${classes.content_buttons_group} `} color="primary">
            <button
              className={classes.content_buttons_files}
              onClick={() => setShowFilesMenu(true)}
            >
              Tệp
              {showFilesMenu && (
                <div ref={filesMenuRef}>
                  <FilesMenu />
                </div>
              )}
            </button>
            <button
              className={classes.content_buttons_info}
              onClick={() => setShowInfoMenu(true)}
            >
              Thông tin khác
              {showInfoMenu && (
                <div ref={infoMenuRef}>
                  <InfoMenu toggleInfoMenu={toggleInfoMenu} />
                </div>
              )}
            </button>
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
