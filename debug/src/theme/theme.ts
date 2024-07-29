import { createStitches } from "@stitches/react";
import { ThemeDefault } from "../../../src/api";

const ThemeCustom = {
    ...ThemeDefault,
    theme: {
        colors: {
            primary: "#13b497",
        },
    },
};

export const Theme = createStitches(ThemeCustom);