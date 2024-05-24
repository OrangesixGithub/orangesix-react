import { expect, describe, test } from "@jest/globals";
import { getCep, getMetaContent, getElementDOM } from "../dist/utils";

describe("Utils", () => {

    describe("Arquivo -> const.ts", () => {

        test("BASE", () => {
            document.body.innerHTML = "<meta id='react-base' name='react-base' content='https://www.orangesix.com.br/'>";
            expect(getMetaContent("react-base")).toEqual("https://www.orangesix.com.br");
        });

        test("TOKEN", () => {
            document.body.innerHTML = "<meta id='csrf-token' name='csrf-token' content='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'>";
            expect(getMetaContent("csrf-token")).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
        });

        test("USER", () => {
            document.body.innerHTML = "<meta id='auth' name='auth' content='1'>";
            expect(getMetaContent("auth")).toEqual("1");
        });
    });

    describe("Arquivo -> helper.ts", () => {

        test("getCep() -> Localizar cep informado.", () => {
            return getCep("37048060")
                .then(data => expect(data.localidade).toEqual("Varginha"));
        });

        test("getElementDOM() -> Retornar o element body se não for informado nada.", () => {
            return getElementDOM()
                .then(element => {
                    expect(element?.length).toBeGreaterThan(0);
                });
        });

        test("getElementDOM('#' | '.') -> Retorna null se for informado somente carácter de id e class.", () => {
            return getElementDOM("#")
                .then(element => {
                    expect(element).toBeNull();
                });
        });

        test("getElementDOM('#root') -> Retornar o element informado.", () => {
            document.body.innerHTML = "<div id='root'></div>";
            return getElementDOM("#root")
                .then(element => {
                    expect(element?.length).toBeGreaterThan(0);
                });
        });
    });
});
