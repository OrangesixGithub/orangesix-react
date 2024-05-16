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

declare function POST<IResponseData>(route: string, body: any, options?: IPostOptionsProps): Promise<IResponseData>;

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

declare async function GET_CEP(value: string): Promise<IUtilsHelperResponse["GET_CEP"]>

export { BASE, TOKEN, USER, POST, GET_CEP };

