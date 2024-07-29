import React from "react";

export interface TableTemplateProps {
    /**
     * Conteúdo do cabeçalho personalizado.
     */
    templeteHeader?: React.ReactNode

    /**
     * Conteúdo do rodapé personalizado.
     */
    templateFooter?: React.ReactNode
}