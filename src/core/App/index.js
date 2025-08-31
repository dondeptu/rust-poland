import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>Hello!</div>
  </ThemeProvider>
);

export default App;