import Swal from "sweetalert2";
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
            type: type ?? "toast",
            library: library ?? "sweetAlert"
        }
    }, "*");
}

/**
 * Returns the message object according to the given parameters
 */
export function message<T extends keyof IUtilsMessageOptions>(params: IUtilsMessage<T>) {
    let { message, library, type, options } = params;
    if (library === "sweetAlert") {
        let swal = {
            icon: message.type,
            title: message.title,
            text: message.text
        };

        if (type === "toast") {
            const Toast = Swal.mixin(options !== undefined
                ? options : {
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
            Toast.fire(swal);
        } else {
            Swal.fire({ ...swal, ...options });
        }
    }
}