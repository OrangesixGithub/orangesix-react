import React from "react";
import { CSS } from "@stitches/react";
import { ThemeProps } from "../theme";

export interface APIComponentProps {

    /**
     * Adiciona no atributo `class` do componente o valor atribuido nessa propriedade
     */
    className?: string

    /**
     * Define o tamanho da box do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SIZES"
     */
    size?: keyof ThemeProps["theme"]["sizes"]

    /**
     * Define a margin do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SPACE"
     */
    margin?: keyof ThemeProps["theme"]["space"],

    /**
     * Define o padding do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SPACE"
     */
    padding?: keyof ThemeProps["theme"]["space"],

    /**
     * Define o CSS individual para o componente
     */
    css?: CSS
}

export declare const ThemeDefault: ThemeProps;

export declare const ThemeProvider: React.Context<any>;

export * from "./css";