import { getMetaContent } from "./helper";

export const USER: string | null = getMetaContent("auth");
export const BASE: string | null = getMetaContent("react-base");
export const TOKEN: string | null = getMetaContent("csrf-token");
