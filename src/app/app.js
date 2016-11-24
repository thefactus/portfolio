import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from "./components/Main";
import "../styles/main.scss";

injectTapEventPlugin();

render(
  <Main />,
  window.document.getElementById("app")
);
