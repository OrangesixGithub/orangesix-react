import { describe, expect, test } from "@jest/globals";
import { getCep } from "../../../dist/utils";

describe("Utils", () => {

    test("CEP", () => {
        return getCep("37048060")
            .then(data => expect(data.localidade).toBe("Varginha"));
    });
});

