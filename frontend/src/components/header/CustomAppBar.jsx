import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
}));

const CustomUserMenu = (props) => (
  <UserMenu {...props}>
    <MenuItemLink
      to="/profile"
      primaryText="Profile"
      leftIcon={<AccountCircle />}
    />
  </UserMenu>
);

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} userMenu={<CustomUserMenu />}>
      <Typography variant="h6" color="inherit" className={classes.title}>
        Connect
      </Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
