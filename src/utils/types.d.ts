import { SweetAlertOptions } from "sweetalert2";

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