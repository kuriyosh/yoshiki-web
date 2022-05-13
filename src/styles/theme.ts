import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3C4858",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#2F2F2F",
      main: "#1A1A1A",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFF",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontFamily: "Roboto, Helvetica, Arial, serif",

    h1: { fontSize: 60 },
    h2: { fontSize: 48 },
    h3: { fontSize: 42 },
    h4: { fontSize: 36 },
    h5: { fontSize: 20 },
    h6: { fontSize: 18 },
    subtitle1: { fontSize: 18 },
    body1: { fontSize: 16 },
    button: { textTransform: "none" },
  },
})
