import * as React from "react";
import { Header } from "./components/Header";
import Recipes from './components/recipes';
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Header />
          <Recipes />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
