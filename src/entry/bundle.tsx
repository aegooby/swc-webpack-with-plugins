import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import * as Router from "react-router-dom";

import { default as Root } from "./Root";
import "../styles.css";

try {
    const root = document.querySelector("#root");
    if (!root) {
        throw new Error("document.querySelector(): could not find root node");
    }

    const element: React.ReactElement =
        <Router.BrowserRouter>
            <Root />
        </Router.BrowserRouter>;

    ReactDOMClient.createRoot(root).render(element);
} catch (error) {
    console.error(error);
}