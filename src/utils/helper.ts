import $ from "jquery";
import axios from "axios";
import { message } from "./message";
import { IUtilsHelperResponse } from "./@types";

/**
 * Allows cross-origin communication between windows object e.g. communication between iframe and main body
 */
export function windowMessageEvent(): void {
    window.addEventListener("message", function (event: MessageEvent) {
        if (event.data?.type === "message") {
            let data = event.data;
            message<any>({ ...data.params });
        }
    });
}

/**
 * Search for the ZIP code in the public api "https://viacep.com.br/ws/"
 */
export async function getCep(value: string): Promise<IUtilsHelperResponse["gep_cep"]> {
    let cep = value.length === 0 ? "00000000" : value.replace("-", "");
    return await axios.get<IUtilsHelperResponse["gep_cep"]>("https://viacep.com.br/ws/" + cep + "/json/")
        .then(data => data.data);
}

/**
 * Performs element search in the DOM tree
 */
export function getElementDOM(element?: string, preloadTimeOut: number = 300): Promise<null | JQuery<HTMLElement>> {
    return new Promise((resolve) => {
        // @ts-ignore
        let body = window.self === window.top ? $("body") : $(window.frameElement).parents("body");
        if (!element || element.length === 0) {
            resolve(body);
        }

        if (element === "#" || element === ".") {
            resolve(null);
        }

        let elementFound = body.find(element);
        if (elementFound.length > 0) {
            resolve(elementFound);
        } else {
            setTimeout(() => {
                let iframe = body.find("iframe").contents();
                if (iframe.length === 0) {
                    resolve(null);
                }
                elementFound = iframe.find(element);
                if (elementFound.length > 0) {
                    resolve(elementFound);
                }
                resolve(null);
            }, preloadTimeOut);
        }
    });
}