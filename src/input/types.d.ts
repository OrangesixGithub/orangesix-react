import { KeyFilterType } from "primereact/keyfilter";
import React, { HTMLInputTypeAttribute } from "react";
import {
    ApiComponentProps,
    ApiFieldModeProps,
    ApiFieldHookFormProps,
    ApiFieldComponentProps,
    ApiFieldControlledProps,
} from "../api/types";

interface InputBaseProps extends ApiComponentProps, ApiFieldComponentProps {

    /**
     * Define o tipo de dados do componente
     */
    type?: Extract<HTMLInputTypeAttribute, "text" | "date" | "email" | "time" | "number">

    /**
     * A propriedade `ref` retorna a referência do componente
     */
    ref?: React.Ref<HTMLInputElement>

    /**
     * Define a opção de filtro de dados do componente
     */
    keyFilter?: KeyFilterType;

    /**
     * Define o tamanho do componente
     */
    sizes?: "small" | "large"
}

export type InputProps<T extends ApiFieldModeProps> = T extends "Controlled"
    ? InputBaseProps & ApiFieldControlledProps
    : InputBaseProps & ApiFieldHookFormProps;
