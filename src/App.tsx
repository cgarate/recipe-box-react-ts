import * as React from "react";
import { StyledCard } from "./components/Card";
import { Header } from "./components/Header";
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Header />
          <StyledCard p={2} bg='trafficOrange' title="Receta One" />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
