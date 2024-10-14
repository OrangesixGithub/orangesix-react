import { Editor } from "@tiptap/react";
import { ApiComponentProps, ApiFieldComponentProps } from "../api/types";

export interface EditorProps extends ApiComponentProps, ApiFieldComponentProps {

    /**
     * Valor inicial do editor de texto
     */
    value: string;

    /**
     * Define quais opção será renderizada no editor de texto
     */
    options?: EditorOptions | "basic" | "full"

    /**
     * Define a altura minima do editor
     */
    height?: number

    /**
     * Método responsável por alterar o valor do state inicial
     */
    onChange(value: string): void
}

export interface EditorOptions {
    text: boolean
    bold: boolean;
    italic: boolean;
    color: boolean
    strike: boolean;
    underline: boolean;
    code: boolean;
    highlight: boolean;
    bulletlist: boolean
    orderlist: boolean
    link: boolean
    image: boolean
}

export interface EditorCoreProps {
    /**
     * Propriedade de edição do editor de código do pacote TipTap
     * @link https://tiptap.dev/
     */
    editor: Editor
}