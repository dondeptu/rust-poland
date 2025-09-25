import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";
import { Homepage } from "../../features/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toArticle, toArticles, toHomepage } from "./routes";
import { Navigation } from "../../common/Navigation";
import { AllArticles } from "../../features/allArticles";
import { ArticlePage } from "../../features/articlePage";
import ScrollToTop from "./ScrollToTop";
import { ContactUs } from "../../common/ContactUs";

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path={toHomepage()} element={<Homepage />} />
        <Route path={toArticles()} element={<AllArticles />} />
        <Route path={toArticle()} element={<ArticlePage />} />
      </Routes>
      <ContactUs />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;