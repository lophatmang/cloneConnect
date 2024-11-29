import { Warning } from "@material-ui/icons";
import classes from "./CustomShow.module.css";

const FilesMenu = () => {
  return (
    <ul className={`${classes.content_menu_files} ${classes.content_menu}`}>
      <li className={classes.content_menu_item}>
        Road camera
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Wide road camera
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Driver camera
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Log data
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <div className={classes.content_menu_divider}>
      </div>
      <li className={classes.content_menu_item}>All logs
      </li>
      <li className={classes.content_menu_item}>All files
      </li>
      <div className={classes.content_menu_divider}>
      </div>
      <div className={classes.content_menu_message}>
        <p>
          <Warning fontSize="medium" className={classes.content_menu_message_icon} />
          <span className={classes.content_menu_message_status}>Device offline</span>
        </p>
        <p className={classes.content_menu_message_text}>
          uploading will resume when device is online
        </p>
      </div>
    </ul>
  )
}

export default FilesMenu