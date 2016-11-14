import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

class Main extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

injectTapEventPlugin();
export default Main;
