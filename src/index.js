import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as NumberProvider } from "./Context/phoneNumber/phoneNumber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <NumberProvider>
      <App />
    </NumberProvider>
);
