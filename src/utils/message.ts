import SweetAlert from "sweetalert2";
import Snackbar from "node-snackbar";
import { IUtilsMessage, IUtilsMessageOptions } from "./@types";

/**
 * Sends the message to the window's message event
 */
export function sendMessage<T extends keyof IUtilsMessageOptions>(params: IUtilsMessage<T>) {
    let Window: Window = window.self === window.top ? window : window.parent;
    const { message, library, type, options } = params;
    Window.postMessage({
        type: "message",
        params: {
            message,
            options,
            type: type ?? "message",
            library: library ?? "snackbar"
        }
    }, "*");
}

/**
 * Returns the message object according to the given parameters
 */
export function message<T extends keyof IUtilsMessageOptions>(params: IUtilsMessage<T>) {
    let { message, library, type, options } = params;

    library = library ?? "snackbar";
    switch (library) {
        case "sweetAlert":
            let swal = {
                icon: message.type,
                title: message.title,
                text: message.text
            };
            if (type === "toast") {
                const Toast = SweetAlert.mixin(options !== undefined ? options
                    : {
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = SweetAlert.stopTimer;
                            toast.onmouseleave = SweetAlert.resumeTimer;
                        }
                    });
                Toast.fire(swal);
            } else {
                SweetAlert.fire({ ...swal, ...options });
            }
            break;
        case "snackbar":
            let config: any = options;
            Snackbar.show(config === undefined ? {
                pos: "top-right",
                showAction: false,
                customClass: message.type,
                text: "<p class='d-flex m-0 align-items-center'><i class='me-2 " + message.icon + "'></i>" + message.title + "</p>",
            } : config);
            break;
    }
}