import { EditorOptions } from "./types";

export const editorBasic: EditorOptions = {
    text: true,
    bold: true,
    italic: true,
    color: true,
    strike: false,
    underline: false,
    code: false,
    highlight: false,
    bulletlist: false,
    orderlist: false,
    link: false,
    image: false
};

export const editorFull: EditorOptions = {
    text: true,
    bold: true,
    italic: true,
    color: true,
    strike: true,
    underline: true,
    code: true,
    highlight: true,
    bulletlist: true,
    orderlist: true,
    link: true,
    image: true
};