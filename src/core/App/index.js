import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";
import { Homepage } from "../../features/homepage";
import { DesktopNav } from "../../common/Navigation/DesktopNav";
import { BrowserRouter, Route, Routes } from "react-router";
import { toArticles, toHomepage } from "./routes";

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DesktopNav />
      <Routes>
        <Route path={toHomepage()} element={<Homepage />} />
        <Route path={toArticles()} element={""} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;