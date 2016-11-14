import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navbar from './navbar';

const Main = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
    </div>
  );
}

injectTapEventPlugin();
export default Main;
