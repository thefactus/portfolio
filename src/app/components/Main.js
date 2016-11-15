import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navbar from './navbar';
import Body from './body';

const Main = (props) => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
}

injectTapEventPlugin();
export default Main;
