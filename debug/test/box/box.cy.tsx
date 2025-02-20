import React from "react";
import "../../assets/css/theme.css";
import { Box } from "../../../src/box";
import "bootstrap-icons/font/bootstrap-icons.css";

describe("<Box />", () => {
    it("Simple", () => {
        cy.viewport(1024, 768);
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Box className="bg-light rounded"
                      size="50"><p>Cypress Luiz</p></Box>);
    });
});