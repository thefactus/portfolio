import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Body from "./body";

const Main = (props) => {
  return (
    <div>
      <Body />
    </div>
  );
}

injectTapEventPlugin();
export default Main;
