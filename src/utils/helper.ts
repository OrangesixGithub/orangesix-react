import axios from "axios";
import { IUtilsHelperResponse } from "./@types";

/**
 * Search for the ZIP code in the public api "https://viacep.com.br/ws/"
 */
async function GET_CEP(value: string): Promise<IUtilsHelperResponse["GET_CEP"]> {
    let cep = value.length === 0 ? "00000000" : value.replace("-", "");
    return await axios.get<IUtilsHelperResponse["GET_CEP"]>("https://viacep.com.br/ws/" + cep + "/json/")
        .then(data => data.data);
}

export { GET_CEP };