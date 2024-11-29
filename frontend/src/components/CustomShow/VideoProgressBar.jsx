import { useEffect, useState } from "react";
import classes from "./CustomShow.module.css";

const VideoProgressBar = ({videoRef}) => {

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setProgressValue(videoRef.current.getTime() / videoRef.current.getDuration() * 100);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [videoRef]);

  

  return (
    <div className={classes.header_timeline_progress}>
      <progress className={classes.header_timeline_progress_bar} max={100} value={progressValue}></progress>
    </div>
  );
};

export default VideoProgressBar;
