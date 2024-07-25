import { createStitches } from "@stitches/react";
import { ThemeDefault } from "../../../src/api";

const ThemeCustom = {};

export const Theme = createStitches({ ...ThemeDefault, ...ThemeCustom });