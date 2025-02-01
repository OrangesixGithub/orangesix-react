import React from "react";
import { TabPanelHeaderTemplateOptions, TabViewTabChangeEvent, TabViewTabCloseEvent } from "primereact/tabview";
import { ApiComponentProps, ApiFieldComponentProps } from "../api/types";

export interface TabViewTabProps extends Pick<ApiFieldComponentProps, "iconPrefix" | "icon" | "id" | "disabled"> {

    /**
     * Define o titulo da Tabview
     */
    tab: string

    /**
     * Define o contéudo da Tabview
     */
    content: React.ReactNode

    /**
     * Define a posição do icone da Tabview
     */
    iconPosition?: "left" | "right"

    /**
     * Define o template de personalização para TabView
     */
    headerTemplate?: (options: TabPanelHeaderTemplateOptions) => React.ReactNode

    /**
     * Define se a tabview vai ter a opção de fechar
     */
    closed?: boolean
}

export interface TabViewProps extends ApiComponentProps {

    /**
     * Array de objeto utilizado na construção da tabview
     */
    tabs: Array<TabViewTabProps>

    /**
     * Indica qual tabview vai estar ativio pelo indice
     */
    tabIndex?: number

    /**
     * Função retorna o evento da tabview quando é moficada
     */
    onChange?: (event: TabViewTabChangeEvent) => void

    /**
     * Função retorna o evento quando a tabview é fechada
     */
    onClosed?: (event: TabViewTabCloseEvent) => void
}