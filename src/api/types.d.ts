import { CSS } from "@stitches/react";
import { ThemeDefault } from "./theme";

/**
 * Realiza o mapeamento dos valores da propriedades css `align-items`
 */
export type AlignItemsProps =
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";

/**
 * Realiza o mapeamento dos valores da propriedades css `justify-content`
 */
export type JustifyContentProps =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";

/**
 * Define a tipagem `default` do tema dos componentes do pacote
 */
export type ApiThemeProps = typeof ThemeDefault

/**
 * Define as tipagens `default` de todos os componentes do pacote
 */
export interface ApiComponentProps {

    /**
     * Adiciona no atributo `class` do componente o valor atribuido nessa propriedade
     */
    className?: string

    /**
     * Define o tamanho da box do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SIZES"
     */
    size?: keyof ApiThemeProps["theme"]["sizes"]

    /**
     * Define a margin do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SPACE"
     */
    margin?: keyof ApiThemeProps["theme"]["space"],

    /**
     * Define o padding do componente de acordo com o valores obtidos no arquivo
     * de configuração do tema "SPACE"
     */
    padding?: keyof ApiThemeProps["theme"]["space"],

    /**
     * Define o CSS individual para o componente
     */
    css?: CSS
}