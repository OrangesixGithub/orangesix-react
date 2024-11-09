import { expect, describe, test } from "@jest/globals";
import { filterLegend, filterLegendData, filterLegendText, filterLegendAutocomplete } from "../dist/inputfilter";

describe("InputFilter", () => {

    describe("Arquivo -> legend.ts", () => {
        test("filterLegend - Undefined", () => expect(filterLegend(undefined)).toBeNull());
        test("filterLegend - Valor diferente", () => expect(filterLegend("9/11/2024>!@#")).toBeNull());
        test("filterLegend - Igual a", () => expect(filterLegend("9/11/2024=")).toEqual("Igual a"));
        test("filterLegend - Maior ou igual a", () => expect(filterLegend("9/11/2024>=")).toEqual("Maior ou igual a"));
        test("filterLegend - Intervalo", () => expect(filterLegend("9/11/2024{}0/0/0")).toEqual("Intervalo"));

        test("filterLegendData", () => expect(typeof filterLegendData(undefined)).toBe("string"));
        test("filterLegendData", () => expect(typeof filterLegendData("9/11/2024=")).toBe("string"));

        test("filterLegendText", () => expect(typeof filterLegendText(undefined)).toBe("string"));
        test("filterLegendText", () => expect(typeof filterLegendText("luizfernando!%")).toBe("string"));

        test("filterLegendAutocomplete", () => expect(typeof filterLegendAutocomplete(undefined)).toBe("string"));
        test("filterLegendAutocomplete", () => expect(filterLegendAutocomplete("1!=", [{
            id: 1,
            label: "TESTE"
        }])).toBe("Diferente de: TESTE"));
    });
});
