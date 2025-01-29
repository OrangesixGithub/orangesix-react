import Root from "./src";
import React from "react";
import ReactDOM from "react-dom/client";

//Libs
import "bootstrap-icons/font/bootstrap-icons.css";
import "@webdatarocks/webdatarocks/webdatarocks.css";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

import "./assets/css/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Root/>,
);
