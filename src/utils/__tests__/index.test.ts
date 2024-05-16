import { describe, expect, test } from "@jest/globals";
import { POST, GET_CEP } from "../../../dist/utils/index.cjs";

describe("Utils", () => {

    test("POST", () => {
        POST("", {}, { url: "https://jsonplaceholder.typicode.com/posts" })
            .then(response => expect(response).toBe("object"));
    });
    
    test("CEP", () => {
        GET_CEP("37048060")
            .then(data => expect(data.localidade).toEqual("Varginha"));
    });
});

