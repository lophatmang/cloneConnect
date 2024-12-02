import { Warning } from "@material-ui/icons";
import classes from "./CustomShow.module.css";

const FilesMenu = () => {
  return (
    <ul className={`${classes.content_menu_files} ${classes.content_menu}`}>
      <li className={classes.content_menu_item}>
        Camera hành trình
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Camera hành trình góc rộng
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Camera tài xế
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <li className={classes.content_menu_item}>Dữ liệu log
        <button className={classes.content_menu_files_button}>
          download
        </button>
      </li>
      <div className={classes.content_menu_divider}>
      </div>
      <li className={classes.content_menu_item}>Tất cả logs
      </li>
      <li className={classes.content_menu_item}>Tất cả tệp
      </li>
      <div className={classes.content_menu_divider}>
      </div>
      <div className={classes.content_menu_message}>
        <p>
          <Warning fontSize="medium" className={classes.content_menu_message_icon} />
          <span className={classes.content_menu_message_status}>Thiết bị ngoại tuyến</span>
        </p>
        <p className={classes.content_menu_message_text}>
          quá trình tải lên sẽ tiếp tục khi thiết bị của bạn kết nối trực tuyến
        </p>
      </div>
    </ul>
  )
}

export default FilesMenu