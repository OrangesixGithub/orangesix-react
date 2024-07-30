import React from "react";
import ReactDOM from "react-dom/client";

import Table from "./src/table/index";
import { Theme } from "./src/theme/theme";
import { ThemeProvider } from "../dist/api";

import "bootstrap-icons/font/bootstrap-icons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider.Provider value={Theme}>
            <Table/>
        </ThemeProvider.Provider>
    </React.StrictMode>,
);
