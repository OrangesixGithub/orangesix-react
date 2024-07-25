import { CSS } from "@stitches/react";
import { ThemeProvider } from "../api";

const ContainerStyle: CSS = {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    width: "calc($$size - $$margin)",
    margin: "$$margin calc($$margin / 2)",
    padding: "$$padding",
    alignItems: "$$align",
    justifyContent: "$$justify",

    "@sm": {
        width: "calc(100% - $$margin)"
    },

    variants: {
        direction: {
            row: {
                flexDirection: "row"
            },
            column: {
                flexDirection: "column"
            }
        }
    },

    defaultVariants: {
        direction: "row"
    }
};

export const Container = ThemeProvider._currentValue.styled("div", ContainerStyle);