import React  from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Body from "./body";

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Body />
      </MuiThemeProvider>
    );
  }
}

export default Main;
