import { SweetAlertOptions } from "sweetalert2";

/**
 * Retorna os tipos do arquivo <b>const.ts</b>
 *
 * @module utils
 * @author Luiz Fernando Bernardes de Paula
 */
export declare const BASE: null | string;
export declare const TOKEN: null | string;
export declare const USER: null | string;

/**
 * Retorna os tipos do arquivo <b>request.ts</b>
 *
 * @module utils
 * @author Luiz Fernando Bernardes de Paula
 */
export interface IUtilsRequestPostOptions {

    /**
     * Blocks multiple simultaneous requests
     */
    blockedToManyRequest?: boolean

    /**
     * Blocks the execution of the response method upon return from the post.
     */
    blockedResponse?: boolean

    /**
     * Replace the BASE url with the absolute url provided
     */
    url?: string
}

export declare function post<TypeDataResponse extends IUtilsResponseType<any>>(route: string, body: any, form?: string, options?: IUtilsRequestPostOptions): Promise<TypeDataResponse>;

/**
 * Retorna os tipos do arquivo <b>helper.ts</b>
 *
 * @module utils
 * @author Luiz Fernando Bernardes de Paula
 */
export interface IUtilsHelperResponse {
    gep_cep: {
        bairro: string
        cep: string
        complemento: string
        localidade: string
        logradouro: string
        uf: string
    }
}

export declare function windowMessageEvent(): void

export declare function getMetaContent(id: string): string | null

export declare async function getCep(value: string): Promise<IUtilsHelperResponse["gep_cep"]>

export declare async function getElementDOM(element?: string, preloadTimeOut?: number): Promise<null | JQuery<HTMLElement>>


/**
 * Retorna os tipos do arquivo <b>response.ts</b>
 *
 * @module utils
 * @author Luiz Fernando Bernardes de Paula
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
    type?: "success" | "warning" | "error" | "info"
    title?: string
    message?: string
    text?: string
    icon?: string
}

export declare function response<Type>(response: IUtilsResponseType<Type>, form: string): void

export declare function messageField(data: IUtilsResponseError, form: string, type: string): void

export declare function messageFieldClear(form: string): void

export declare function tabViewActiveError(form: string, errors: IUtilsResponseError): void

/**
 * Retorna os tipos do arquivo <b>message.ts</b>
 *
 * @module utils
 * @author Luiz Fernando Bernardes de Paula
 */
export interface IUtilsMessage<T extends keyof IUtilsMessageOptions> {
    message: IUtilsResponseMessage,
    type?: "toast" | "message",
    options?: IUtilsMessageOptions[T],
    library?: keyof IUtilsMessageOptions
}

export interface IUtilsMessageOptions {
    sweetAlert: SweetAlertOptions,
    snackbar: SnackbarOptions
}

export declare function sendMessage<T extends keyof IUtilsMessageOptions>(params: IUtilsMessage<T>)

export declare function message<T extends keyof IUtilsMessageOptions>(params: IUtilsMessage<T>)