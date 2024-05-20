import axios from "axios";
import { BASE, TOKEN } from "./const";
import { IUtilsRequestPostOptions } from "./@types";
import { messageFieldClear, response } from "./response";

/**
 * Simplifies the POST HTTP request using the axios library behind the scenes.
 */
export function post<IResponseData>(
    route: string,
    body: any,
    form: string = "",
    options?: IUtilsRequestPostOptions
): Promise<IResponseData> {
    return new Promise((resolve, reject) => {
        let url = BASE + (route.startsWith("/") ? "" : "/") + route;
        messageFieldClear(form);
        handleToManyRequest(options?.url ?? url, options?.blockedToManyRequest ?? false);
        axios<IResponseData>({
            method: "post",
            url: options?.url ?? url,
            headers: { "X-CSRF-TOKEN": TOKEN },
            data: !body ? {} : body,
        }).then(response => {
            if (response?.data !== undefined) {
                resolve(response.data);
            }
        }).catch(error => {
            response<any>(error.response?.data, form);
            reject(error);
        });
    });
}

/**
 * Blocks multiple simultaneous requests
 */
function handleToManyRequest(url: string, blocked: boolean): void {
    let requestCount = 0;

    axios.interceptors.request.use(config => {
        requestCount = requestCount + 1;
        if (requestCount > 1 && axios.getUri(config) === url && blocked) {
            return Promise.reject(new Error("Requisições bloqueadas!"));
        }
        return config;
    });
    if (!blocked) {
        axios.interceptors.request.clear();
    }

    axios.interceptors.response.use(response => {
        requestCount = requestCount - 1;
        return response;
    }, function (error) {
        requestCount = requestCount - 1;
        return Promise.reject(error);
    });
}