/**
 * Formata um valor numérico para o formato decimal ou monetário.
 *
 * @param valor - O valor a ser formatado.
 * @param format - O formato desejado: "money" para monetário ou "decimal" para decimal.
 * @returns O valor formatado como string.
 */
export function handleNumber(
    valor: string,
    format: "money" | "decimal" = "decimal"
): string {
    let value = valor.replace(/[^0-9.,]/g, "");
    if (format === "decimal") {
        return value.replace(",", ".").replace(/(\..*)\./g, "$1");
    }
    return parseFloat(value.replace(",", ".")).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).replace(".", " ");
}

/**
 * Formata um valor de string para o formato de horas (HH:MM).
 *
 * @param valor - O valor a ser formatado.
 * @returns O valor formatado como string no formato de horas.
 */
export function handleHours(valor: string): string {
    let value = valor.replace(/[^\d.]/g, "");
    const parts = value.split(".");

    if (parts.length > 1) {
        parts[1] = parts[1].substring(0, 2);
    }

    value = parts.join(".");
    if (value.length > 2) {
        value = value.substring(0, value.length - 2) + ":" + value.substring(value.length - 2);
    }
    return value;
}

/**
 * Retonar a data do dia no formato (Y-m-d) para ser utilizado
 * em input do tipo Date.
 *
 * @return Data
 */
export function handleDateNow(): string {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}