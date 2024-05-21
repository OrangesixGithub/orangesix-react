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