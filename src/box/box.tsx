import { BoxProps } from "./types";
import { Container } from "./styled";
import { CSS } from "@stitches/react";
import { ThemeProvider } from "../api";
import React, { HTMLAttributes, useContext } from "react";

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
export const Box = ({ children, ...props }: BoxProps) => {
    const theme: any = useContext(ThemeProvider);

    const css: CSS = {
        $$size: String((props.size ?? "100")) + "%",
        $$margin: `var(--${String(theme.prefix)}-space-${String(props.margin ?? "2")})`,
        $$padding: `var(--${String(theme.prefix)}-space-${(String(props.padding ?? "1"))})`,
        $$align: props.align ?? "initial",
        $$justify: props.justify ?? "initial"
    };

    const attr: HTMLAttributes<"div"> & Omit<BoxProps, "children"> = {
        css: { ...css, ...props.css },
        className: props.className ?? "",
        direction: props.direction
    };

    return (
        <Container {...attr}>{children}</Container>
    );
};