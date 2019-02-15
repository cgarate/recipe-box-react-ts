import * as React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
// import { theme, ThemeProvider } from './styles/theme';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Card title="Receta One" />
      </div>
    );
  }
}

export default App;
