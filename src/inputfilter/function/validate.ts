/**
 * Valida e ajusta uma data fornecida como um array de números.
 *
 * @param date - Um array de números representando [dia, mês, ano].
 * @returns Um array de números representando a data validada e ajustada.
 */
export function validateDate(date: number[]): number[] {
    const [day, month, year] = date;

    const isMonthValid = month >= 1 && month <= 12;
    const isYearValid = year > 0 && year < 99999;
    const isDayValid = day >= 1 && day <= 31;

    if (isYearValid && !isMonthValid && !isDayValid) {
        return [0, 0, year];
    }

    if (isYearValid && isMonthValid && !isDayValid) {
        return [0, month, year];
    }

    if (isYearValid && isMonthValid && isDayValid) {
        let currentDate = new Date(year, month, 0);
        if (currentDate.getDate() < day) {
            return [currentDate.getDate(), month, year];
        }
        return date;
    }

    if (!isYearValid && isMonthValid && !isDayValid) {
        return [0, month, 0];
    }

    if (!isYearValid && isMonthValid && isDayValid) {
        return [day, month, 0];
    }

    if (!isYearValid && !isMonthValid && isDayValid) {
        return [day, 0, 0];
    }

    if (isYearValid && !isMonthValid && isDayValid) {
        return [day, 0, year];
    }

    return [0, 0, 0];
}