/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import classes from "./CustomShow.module.css";
import {
  Forward10,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Pause,
  PlayArrow,
  Replay10,
} from "@material-ui/icons";

const VideoPlayer = ({ videoRef }) => {
  const [videostate, setVideoState] = useState("playing");
  const [videoTime, setVideoTime] = useState(0);
  const [videoPlayBackRate, setVideoPlayBackRate] = useState(1);

  const playBtnClickHandler = () => {
    if (videostate === "paused") {
      videoRef.current.play();
      setVideoState("playing");
    } else {
      videoRef.current.pause();
      setVideoState("paused");
    }
  };

  const handleBackRateChange = (action) => {
    const backRateList = [0.1, 0.25, 0.5, 1, 2, 4, 8];
    if (action === "increase") {
      const index = backRateList.indexOf(videoPlayBackRate);
      if (index < backRateList.length - 1) {
        videoRef.current.setPlayBackRate(backRateList[index + 1]);
        setVideoPlayBackRate(backRateList[index + 1]);
      }
    } else {
      const index = backRateList.indexOf(videoPlayBackRate);
      if (index > 0) {
        videoRef.current.setPlayBackRate(backRateList[index - 1]);
        setVideoPlayBackRate(backRateList[index - 1]);
      }
    }
  };

  // Update the video time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const videoTime = 
        String(Math.floor(videoRef.current.getTime() / 60)).padStart(2, "0") + ":" + 
        String(Math.floor(videoRef.current.getTime() % 60)).padStart(2, "0") + ":" + 
        String(Math.floor((videoRef.current.getTime() % 1) * 100)).padStart(2, "0");
        setVideoTime(videoTime);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [videoRef]);

  return (
    <div className={classes.video_player}>
      {/* VIDEO BACKWARD AND FORWARD */}
      <div className={classes.video_controls}>
        <div
          className={`${classes.btn_back} ${classes.video_btn}`}
          onClick={() => {
            videoRef.current?.replay10s();
          }}
        >
          <Replay10 fontSize="small" />
        </div>
        <div className={classes.video_divider}></div>
        <div
          className={`${classes.btn_forward} ${classes.video_btn}`}
          onClick={() => {
            videoRef.current?.forward10s();
          }}
        >
          <Forward10 fontSize="small" />
        </div>
        <div className={classes.video_divider}></div>
      </div>
      {/* VIDEO CURRENT TIME */}
      <div className={classes.video_time}>{videoTime}</div>
      {/* VIDEO SPEED CONTROL */}
      <div className={classes.video_speed}>
        <div
          className={classes.video_speed_increase}
          onClick={() => handleBackRateChange("increase")}
        >
          <KeyboardArrowUp fontSize="small" />
        </div>

        {/* VIDEO SPEED VALUE */}
        <div className={classes.video_speed_value}>
          <span>{videoPlayBackRate}</span>x
        </div>
        <div
          className={classes.video_speed_decrease}
          onClick={() => handleBackRateChange("decrease")}
        >
          <KeyboardArrowDown fontSize="small" />
        </div>
      </div>
      {/* VIDEO PLAY/PAUSE BUTTON */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.video_divider}></div>
        <div
          className={`${classes.video_play_btn} ${classes.video_btn}`}
          onClick={playBtnClickHandler}
        >
          {videostate !== "playing" || videoRef.current?.isEnded() ? (
            <PlayArrow onClick={playBtnClickHandler} />
          ) : (
            <Pause onClick={playBtnClickHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
