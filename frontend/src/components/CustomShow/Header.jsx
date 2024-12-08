import classes from "./CustomShow.module.css";

import { useShowContext } from "react-admin";
import CloseIcon from "@mui/icons-material/Close";
import VideoProgressBar from "./VideoProgressBar";
import { ArrowBack } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Header = ({ videoRef }) => {
  // const record = useRecordContext();
  const {record} = useShowContext();

  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/drives");
  };

  const speedColor = (speed) => {
    if (speed === 0) return "linear-gradient(to top, #4A4F4BFF, #747B75FF)";

    if (speed <= 30) return "linear-gradient(to top, #0C2F47FF, #14476CFF)";
    if (speed >= 60) return "linear-gradient(to top, #7E4016FF, #A56439FF)";

    return "linear-gradient(to top, #0E4A27FF, #197E43FF)";
  };

  const convertToLocalDate = (date) => {
    // Convert to Fri May 24
    return new Date(date)
    .toLocaleString('vi-VN', {
      dateStyle: 'short',
      timeStyle: 'medium',
      timeZone: 'Asia/Ho_Chi_Minh',
    })
    .split(' ')[1];
  };

  if(!record) {
    <div className={classes.header}>
      Getting info ...
    </div>
  }

  return (
    <div className={classes.header}>
      {/* HEADER ACTIONS */}
      <div className={classes.header_actions}>
        <div className={classes["header_back-btn"]} onClick={navigateToList}>
          <ArrowBack />
        </div>
        {/* HEADER DATE + TIME */}
        <h3>
          {convertToLocalDate(record?.date)} @ {record?.start_time} to {record?.end_time}
        </h3>
        <div className={classes["header_close-btn"]} onClick={navigateToList}>
          <CloseIcon />
        </div>
      </div>
      {/* HEADER TIMELINE */}
      <div className={classes.header_timeline}>
        <div className={classes.header_timeline_segment}>
          {record?.speeds.map((speed, index) => {
            const getStyle = speedColor(speed);
            return (
              <div
                key={index}
                style={{
                  background: `${getStyle}`,
                  width: "2%",
                  height: "100%",
                }}
              ></div>
            );
          })}
        </div>
        {/* HEADER TIMELINE THUMBNAILS */}
        <div className={classes.header_timeline_thumbnails}>
          <img
            src={record?.timeline_pic}
            loading="lazy"
            className={classes.header_timeline_thumbnail}
          />
        </div>
        {/* HEADER TIMELINE PROGRESS */}
        <VideoProgressBar videoRef={videoRef} />
      </div>
    </div>
  );
};

export default Header;
