import React from "react";
import ReactDOM from "react-dom/client";
// import CounterApp from "./01-useState/CounterApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import HooksApp from "./HooksApp";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
import "./index.css";
import { MemoHook } from "./memo/MemoHook";
// import { Memorize } from "./memo/Memorize";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <MemoHook />
  //</React.StrictMode>
);
