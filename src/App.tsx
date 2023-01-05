import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { Globalstyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/Themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Globalstyle />
    </ThemeProvider>
  );
}
