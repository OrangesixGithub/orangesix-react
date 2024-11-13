import Root from "./src";
import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("Ngo9BigBOggjHTQxAR8/V1NDaF5cWGtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH5fcnRTRWNYUUR3WkY=");

import "../src/api/css/theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@webdatarocks/webdatarocks/webdatarocks.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Root/>,
);
