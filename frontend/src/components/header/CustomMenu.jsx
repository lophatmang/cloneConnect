import { MenuItemLink, Menu } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  active: {
    backgroundColor: "#00000042 !important", // Màu nền khi mục menu đang hoạt động
  },
  inactive: {
    backgroundColor: "transparent", // Màu nền khi mục menu không hoạt động
  },
});

const CustomMenu = (props) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Menu {...props}>
      <MenuItemLink
        to="/drives"
        primaryText="Demo 3X"
        leftIcon={
          <FiberManualRecordIcon style={{ width: "10px", color: "#4b5559" }} />
        }
        className={
          location.pathname === "/drives" ? classes.active : classes.inactive
        }
      />
      <MenuItemLink
        to="#"
        primaryText="Add new device"
        leftIcon={
          <ControlPointIcon style={{ width: "30px", color: "#4b5559" }} />
        }
        className={
          location.pathname === "#" ? classes.active : classes.inactive
        }
      />
    </Menu>
  );
};

export default CustomMenu;
