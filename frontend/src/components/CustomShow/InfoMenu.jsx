import classes from "./CustomShow.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import { useRecordContext } from "react-admin";

const InfoMenu = ({ toggleInfoMenu }) => {

  const record = useRecordContext();

  return (
    <ul className={`${classes.content_menu} ${classes.content_menu_info}`}>
      <li
        className={classes.content_menu_item}
        onClick={() => {
          navigator.clipboard.writeText(record.id);
          toggleInfoMenu();
        }}
      >
        <code id="deviceId" className={classes.content_menu_info_code}>
          {record.id}
        </code>
        <ContentCopyIcon />
      </li>
      <li className={classes.content_menu_item}>
        <span>Chia sẻ</span>
        <ShareIcon />
      </li>
      <div className={classes.content_menu_divider}></div>
      <li className={classes.content_menu_item}>Xem với quyền người quản trị</li>
    </ul>
  );
};

export default InfoMenu;
