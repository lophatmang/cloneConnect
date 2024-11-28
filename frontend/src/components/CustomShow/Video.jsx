import classes from "./CustomShow.module.css";

import React from "react";

const Video = () => {
  return (
    <div className={classes.content_main_video}>
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
    </div>
  );
};

export default Video;
