import * as React from "react";
import { BoxUIContainer } from './components/BoxUIContainer';
import { Header } from "./components/Header";
import Recipes from './components/recipes';
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BoxUIContainer>
          <Header />
          <Recipes />
        </BoxUIContainer>
      </ThemeProvider>
    );
  }
}

export default App;
