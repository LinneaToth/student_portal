import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Bootstrap imports:
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//SCSS to customize the styling
import "./scss/styles.scss";
import "@fontsource/pixelify-sans";

import App from "./App.jsx";

//HashRouter to make the routing work on GitHub Pages
import { HashRouter } from "react-router";

//MUI import, theme is edited to make the scheme match the rest of the site
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#320975",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
