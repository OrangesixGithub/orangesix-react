import { createStitches } from "@stitches/react";
import { ThemeDefault } from "../../../dist/api";

const ThemeCustom = {
    ...ThemeDefault,
    theme: {
        colors: {
            primary: "#13b497",
            secondary: "#969696"
        },
    },
};

export const Theme = createStitches(ThemeCustom);