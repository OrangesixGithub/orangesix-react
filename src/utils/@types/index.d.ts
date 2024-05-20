import { SweetAlertOptions } from "sweetalert2";

/**
 * Returns the typing of the <b>const.ts</b> file
 *
 * @author Luiz Fernando Bernardes de Paula
 * @module utils
 */
declare const BASE: null | string;
declare const TOKEN: null | string;
declare const USER: null | string;

/**
 * Returns the typing of the <b>request.ts</b> file
 *
 * @author Luiz Fernando Bernardes de Paula
 * @module utils
 */
export interface IUtilsRequestPostOptions {
    blockedToManyRequest?: boolean
    url?: string
}

declare function post<IResponseData>(route: string, body: any, form: string = "", options?: IUtilsRequestPostOptions): Promise<IResponseData>;

/**
 * Returns the typing of the <b>helper.ts</b> file
 *
 * @author Luiz Fernando Bernardes de Paula
 * @module utils
 */
export interface IUtilsHelperResponse {
    GET_CEP: {
        bairro: string
        cep: string
        complemento: string
        localidade: string
        logradouro: string
        uf: string
    }
}

declare function windowMessageEvent(): void

declare async function getCep(value: string): Promise<IUtilsHelperResponse["GET_CEP"]>

/**
 * Returns the typing of the <b>response.ts</b> file
 *
 * @author Luiz Fernando Bernardes de Paula
 * @module utils
 */
export interface IUtilsResponseType<T> {
    data?: T
    accept?: any
    redirect?: string
    errors?: IUtilsResponseError
    field?: IUtilsResponseField
    message?: IUtilsResponseMessage
    modal?: IUtilsResponseModal
}

export interface IUtilsResponseError {
    [key: string]: string[];
}

export interface IUtilsResponseField {
    field: string
    messageType: string
    message: string
}

export interface IUtilsResponseModal {
    modal: string,
    action: string
}

export interface IUtilsResponseMessage {
    title: string
    type: "success" | "warning" | "error" | "info"
    text?: string
    icon?: string
}

declare function response<Type>(response: IUtilsResponseType<Type>, form: string = ""): void

declare function messageField(data: IUtilsResponseError, form: string = "", type: string = "is-invalid"): void

declare function messageFieldClear(form: string = ""): void

declare function tabViewActiveError(form: string = "", errors: IUtilsResponseError): void

/**
 * Returns the typing of the <b>message.ts</b> file
 *
 * @author Luiz Fernando Bernardes de Paula
 * @module utils
 */
export interface IUtilsMessageOptions {
    sweetAlert: SweetAlertOptions
}

export interface IUtilsMessage<T extends keyof IUtilsMessageOptions> {
    message: IUtilsResponseMessage,
    type?: "toast" | "message",
    options?: IUtilsMessageOptions[T],
    library?: keyof IUtilsMessageOptions
}

export {
    BASE,
    TOKEN,
    USER,
    post,
    getCep,
    response,
    messageField,
    messageFieldClear,
    tabViewActiveError
};

