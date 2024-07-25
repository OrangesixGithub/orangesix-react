import React from "react";
import ReactDOM from "react-dom/client";

import Core from "./src/core/index";
import { Theme } from "./src/theme/theme";
import { ThemeProvider } from "../src/api";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider.Provider value={Theme}>
            <Core></Core>
        </ThemeProvider.Provider>
    </React.StrictMode>,
);
