import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff", // Màu chữ cho chế độ sáng
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
    },
  },
  typography: {
    allVariants: {
      color: "#ffffff", // Màu chữ cho chế độ tối
    },
  },
});
