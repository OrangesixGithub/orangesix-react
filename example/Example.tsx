import "sweetalert2/dist/sweetalert2.css";
import "node-snackbar/dist/snackbar.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";

import React, { useEffect } from "react";
import { sendMessage } from "../src/utils";
import { IUtilsResponseMessage } from "../src/utils/@types";

/**
 * Components for package resource development
 */
export function Example() {

    let data: IUtilsResponseMessage = {
        message: "Item atualizado com sucesso!",
        type: "success",
        icon: "bi bi-check-circle"
    };

    useEffect(() => {
        sendMessage<"snackbar">({
            message: data
        });
    }, []);

    return (
        <div className="container p-2">
            <h1>Development</h1>
        </div>
    );
}