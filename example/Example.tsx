import "primereact/resources/themes/tailwind-light/theme.css";
import "sweetalert2/dist/sweetalert2.css";

import React, { useEffect } from "react";
import { post, response } from "../src/utils";
import { InputText } from "primereact/inputtext";

const body = {
    title: "foo",
    body: "bar",
    userId: 1,
};

export function Example() {

    useEffect(() => {
        setTimeout(() => {
            post<typeof body>("", body, "formManager", { url: "https://jsonplaceholder.typicode.com/posts/" })
                .then(() => response({
                    message: {
                        title: "teste",
                        text: "Realizando teste de mensagem",
                        type: "success",
                    }
                }));
        }, 1000);
    }, []);

    return (
        <form className="content p-3"
              id="formManager">
            <div className="w-50">
                <input required
                       className="form-control is-invalid"
                       name="validation"
                       placeholder="Digite o valor do campo"
                       type="text"/>
                <div className="invalid-feedback"
                     data-name="validation"
                     id="j_feedback">Mensagem de feedback do campo.
                </div>
            </div>
            <div className="mt-3 w-50">
                <select required
                        className="form-select is-invalid">
                    <option value="">Select validação</option>
                </select>
                <div className="invalid-feedback"
                     id="j_feedback">Mensagem de feedback do campo.
                </div>
            </div>
            <div className="mt-3 w-50">
                <textarea required
                          className="form-control is-invalid"
                          placeholder="Digite o valor do campo"></textarea>
                <div className="invalid-feedback"
                     id="j_feedback">Mensagem de feedback do campo.
                </div>
            </div>
            <div className="mt-3 w-50">
                <InputText invalid
                           className="p-inputtext-sm p-2"/>
                <div className="text-danger"
                     id="j_feedback"
                     style={{ fontSize: ".8em" }}>Mensagem de feedback do campo.
                </div>
            </div>
            <div className="mt-3 w-50">
                <div className="form-check">
                    <input required
                           className="form-check-input is-invalid"
                           type="checkbox"/>
                    <label className="form-check-label">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback"
                         id="j_feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
        </form>
    );
}