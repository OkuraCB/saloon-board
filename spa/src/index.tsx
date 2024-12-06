import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { darkTheme, lightTheme } from "./theme/theme";

const ThemedApp = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const toggle = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <App toggle={toggle} />
      </Provider>
    </ThemeProvider>
  );
};

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </React.StrictMode>
);
