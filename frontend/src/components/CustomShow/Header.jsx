import classes from "./CustomShow.module.css";

import { ListButton, useRecordContext } from "react-admin";
import CloseIcon from "@mui/icons-material/Close";

const CustomShowHeader = () => {
  const record = useRecordContext();

  return (
    <div className={classes.header}>
      <div className={classes.header_actions}>
        <ListButton label="Back" startIcon={null} />
        {record.title}
        <ListButton label="Close" startIcon={<CloseIcon />} />
      </div>
      <div className={classes.header_timeline}>
        <div className={classes.header_timeline_segment}></div>
        <div className={classes.header_timeline_thumbnails}></div>
        <div className={classes.header_timeline_progress}></div>
      </div>
    </div>
  );
};

export default CustomShowHeader;
