import Root from "./src";
import React from "react";
import ReactDOM from "react-dom/client";

import "../src/api/css/theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Root/>
    </React.StrictMode>,
);
