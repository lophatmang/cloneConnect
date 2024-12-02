import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

// import Avatar from "@material-ui/core/Avatar";
import "./header.css";

const styles = {
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: "bolder",
    fontSize: "20px",
  },
  spacer: {
    flex: 1,
  },
  avatar: { marginRight: "8px" },
  userInfo: { display: "flex", alignItems: "center" },
  userName: { marginLeft: "8px" },
  h4: {
    margin: "0",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  p: {
    margin: 0,
    paddingBottom: "30px",
    color: "#ffffff66",
  },
};

const CustomUserMenu = (props) => {
  const userName = "Team funix";
  return (
    <UserMenu
      {...props}
      icon={
        <Box sx={styles.userInfo}>
          <Avatar
            alt="User Avatar"
            src="default-avatar.jpg"
            sx={styles.avatar}
          />
          <Typography variant="body1" sx={styles.userName}>
            {userName}
          </Typography>
        </Box>
      }
    >
      <Typography variant="h4" sx={styles.h4}>
        comma.connect.user@gmail.com
      </Typography>
      <Typography sx={styles.p}>
        google_115606701206535685614 <br /> Version: dev
      </Typography>
      <MenuItemLink
        to="#"
        style={{ marginBottom: "10px" }}
        primaryText="Manage Account"
        leftIcon={<SettingsIcon />}
      />
      <MenuItemLink to="#" primaryText="Log Out" leftIcon={<ExitToAppIcon />} />
    </UserMenu>
  );
};

const CustomAppBar = (props) => {
  return (
    <AppBar
      style={{ padding: "5px" }}
      {...props}
      userMenu={<CustomUserMenu />}
      toolbar={
        <>
          <Box
            component={"img"}
            sx={{ height: "34px" }}
            src="logo-KoNen.png"
            alt="icon  AI Dynamix Tracking"
          />
          <Typography variant="h6" color="inherit" sx={styles.title}>
            <span style={{ color: "#ffc000" }}>AI</span> Dynamix Tracking
          </Typography>
        </>
      }
    >
      {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        // onClick={props.onMenuClick}
      >
        <Box
          component={"img"}
          sx={{ height: "34px", margin: "0 20px" }}
          src="logo-KoNen.png"
          alt="icon  AI Dynamix Tracking"
        />
      </IconButton> */}

      <Typography variant="span" sx={styles.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
