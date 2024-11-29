import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ExitToApp, Settings as SettingsIcon } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
  avatar: { marginRight: theme.spacing(1) },
  userInfo: { display: "flex", alignItems: "center" },
  userName: { marginLeft: theme.spacing(1) },
}));

const CustomUserMenu = (props) => {
  const classes = useStyles();
  const userName = "Team funix";
  return (
    <UserMenu
      {...props}
      icon={
        <div className={classes.userInfo}>
          <Avatar
            alt="User Avatar"
            src="default-avatar.jpg"
            className={classes.avatar}
          />
          <Typography variant="body1" className={classes.userName}>
            {userName}
          </Typography>
        </div>
      }
    >
      <h4
        style={{
          margin: "0",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        comma.connect.user@gmail.com
      </h4>
      <p
        style={{
          margin: 0,
          paddingBottom: "30px",
          color: "#ffffff66",
        }}
      >
        google_115606701206535685614 <br /> Version: dev
      </p>
      <MenuItemLink
        to="#"
        style={{ marginBottom: "10px" }}
        primaryText="Manage Account"
        leftIcon={<SettingsIcon />}
      />
      <MenuItemLink to="#" primaryText="Log Out" leftIcon={<ExitToApp />} />
    </UserMenu>
  );
};

const CustomAppBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      style={{ padding: "5px" }}
      {...props}
      userMenu={<CustomUserMenu />}
      toolbar={<></>}
    >
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        // onClick={props.onMenuClick}
      >
        <img
          style={{ height: "34px", marginRight: "10px" }}
          src="icon-512x512.png"
          alt="icon connect"
        />
      </IconButton>
      <Typography
        style={{ fontWeight: "bolder", fontSize: "20px" }}
        variant="h6"
        color="inherit"
        className={classes.title}
      >
        Connect
      </Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
