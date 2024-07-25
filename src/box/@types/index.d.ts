import React from "react";
import { AlignItemsProps, APIComponentProps, JustifyContentProps } from "../../api/@types";

export interface BoxProps extends APIComponentProps {

    /**
     * A propriedade `direction` determina o valor do estilo CSS `flex-direction`,
     * definindo a direção em que os itens flexíveis são dispostos dentro de um contêiner flexível.
     */
    direction?: "row" | "column"

    /**
     * A propriedade `align` determina o alinhamento do conteúdo base na propriedade `direction`.
     * Essa propriedade ajusta os estilos CSS `align-items`, permitindo um controle preciso do layout.
     */
    align?: AlignItemsProps

    /**
     * A propriedade `justify` determina o alinhamento do conteúdo base na propriedade `direction`.
     * Essa propriedade ajusta os estilos CSS `justify-content`, permitindo um controle preciso do layout.
     */
    justify?: JustifyContentProps

    /**
     *  A propriedade `children` representa o conteúdo ou elementos filho que serão
     *  renderizados dentro deste componente. Pode incluir texto, elementos React,
     *  ou até mesmo outros componentes.
     */
    children: React.ReactNode
}

/**
 * Componente - `Box`
 *
 * Um componente versátil que pode ser utilizado para criar seções ou caixas em uma página.
 * Permite personalizar o estilo e o conteúdo através de propriedades.
 *
 * Exemplo de uso:
 * ```tsx
 * <Box css={{
 *   "@md": {
 *      width: "calc(50% - $$margin)"
 *                 }
 *   }}
 *   align="flex-end"
 *   justify="space-between"
 *   padding="4"
 *   size="25">
 *   ...conteúdo HTML
 *   </Box>
 * ```
 */
export declare const Box: React.FC<BoxProps>;