import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";
import { Homepage } from "../../features/homepage";

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Homepage />
  </ThemeProvider>
);

export default App;