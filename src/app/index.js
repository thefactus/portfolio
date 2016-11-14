import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    );
  }
}

render(
  <App />,
  window.document.getElementById("app")
);
