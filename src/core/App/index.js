import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";
import { Homepage } from "../../features/homepage";
import { BrowserRouter, Route, Routes } from "react-router";
import { toArticles, toHomepage } from "./routes";
import { Navigation } from "../../common/Navigation";
import { AllArticles } from "../../features/allArticles";

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path={toHomepage()} element={<Homepage />} />
        <Route path={toArticles()} element={<AllArticles />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;