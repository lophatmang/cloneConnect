import classes from "./CustomShow.module.css";

import { useRecordContext } from "react-admin";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Video = forwardRef( function Video(props, ref) {

  const [currentTime, setCurrentTime] = useState(0);

  const record = useRecordContext();
  const videoElementRef = useRef();


  // Update the current time of the video
  const updateVideoTime = () => {
    setCurrentTime(videoElementRef.current.currentTime);
  };

  // Expose the video's methods, so the parent component can call them or pass them to VideooPlayer
  useImperativeHandle(ref, () => ({
    play: () => {
      videoElementRef.current.play();
    },
    pause: () => {
      videoElementRef.current.pause();
    },
    // set video to a specific time
    seek: (time) => {
      videoElementRef.current.currentTime = time;
    },
    // get video's current time
    getTime: () => {
      return currentTime;
    },
    // check if video has ended
    isEnded: () => {
      return videoElementRef.current.ended;
    },
    // set video's playback rate (video speed)
    setPlayBackRate: (rate) => {
      videoElementRef.current.playbackRate = rate;
    },
    // set video time more 10s
    forward10s: () => {
      videoElementRef.current.currentTime += 10;
      if(videoElementRef.current.paused) {
        videoElementRef.current.play();
      }
    },
    // set video time less 10s
    replay10s: () => {
      videoElementRef.current.currentTime -= 10;
      // check if video is paused, then play
      if(videoElementRef.current.paused) {
        videoElementRef.current.play();
      }
    },
    getDuration: () => {
      return videoElementRef.current.duration;
    }
  }));

  return (
    <div className={classes.content_main_video}>
      <video ref={videoElementRef} onTimeUpdate={updateVideoTime} autoPlay>
        <source src={record.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export default Video;
