import { getCep } from "../dist/utils";
import { expect, describe, test } from "@jest/globals";

describe("Utils", () => {
    test("CEP", () => {
        return getCep("37048060")
            .then(data => expect(data.localidade).toEqual("Varginha"));
    });
});
