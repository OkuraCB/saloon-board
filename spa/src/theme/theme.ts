import { createTheme } from "@mui/material/styles";

const monokaiLight = {
  background: "#f8f8f2",
  backgroundDarker: "#e6e6e6",
  text: "#3e3d32",
  textBlend: "#757575",
  cyan: "#66d9ef",
  green: "#a6e22e",
  orange: "#fd971f",
  pink: "#f92672",
  purple: "#ae81ff",
  red: "#f92672",
  yellow: "#e6db74",
};

const monokaiDark = {
  background: "#272822",
  backgroundLight: "#3a382f",
  text: "#f8f8f2",
  textBlend: "#a6a6a6",
  cyan: "#66d9ef",
  green: "#a6e22e",
  orange: "#fd971f",
  pink: "#f92672",
  purple: "#ae81ff",
  red: "#f92672",
  yellow: "#e6db74",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: monokaiLight.purple,
      dark: monokaiLight.yellow,
    },
    secondary: {
      main: monokaiLight.green,
    },
    error: {
      main: monokaiLight.red,
    },
    warning: {
      main: monokaiLight.orange,
    },
    info: {
      main: monokaiLight.cyan,
    },
    success: {
      main: monokaiLight.green,
    },
    background: {
      default: monokaiLight.background,
      paper: monokaiLight.backgroundDarker,
    },
    text: {
      primary: monokaiLight.text,
      secondary: monokaiLight.textBlend,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    h2: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    h3: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    h4: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    h5: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    h6: {
      fontWeight: 700,
      color: monokaiLight.text,
    },
    body1: {
      color: monokaiLight.text,
    },
    body2: {
      color: monokaiLight.text,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: monokaiDark.purple,
      dark: monokaiDark.background,
    },
    secondary: {
      main: monokaiDark.green,
    },
    error: {
      main: monokaiDark.red,
    },
    warning: {
      main: monokaiDark.orange,
    },
    info: {
      main: monokaiDark.cyan,
    },
    success: {
      main: monokaiDark.green,
    },
    background: {
      default: monokaiDark.background,
      paper: monokaiDark.backgroundLight,
    },
    text: {
      primary: monokaiDark.text,
      secondary: monokaiDark.textBlend,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    h2: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    h3: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    h4: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    h5: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    h6: {
      fontWeight: 700,
      color: monokaiDark.text,
    },
    body1: {
      color: monokaiDark.text,
    },
    body2: {
      color: monokaiDark.text,
    },
  },
});
