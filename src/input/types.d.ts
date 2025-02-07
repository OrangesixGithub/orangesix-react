import { PasswordProps } from "primereact/password";
import React, { HTMLInputTypeAttribute } from "react";
import {
    ApiComponentProps,
    ApiFieldModeProps,
    ApiFieldHookFormProps,
    ApiFieldComponentProps,
    ApiFieldControlledProps,
} from "../api/types";

interface InputMaskProps {
    /**
     * Define se campo vai ser limpo se mascara tiver imcompleta
     */
    maskAutoClear?: boolean
}

interface InputPasswordProps {
    /**
     * Define se vai ou não mostra o botão para exibir a senha
     */
    passwordShow?: boolean

    /**
     * Define se vai ou não mostra a legenda da senha
     */
    passwordFeedback?: boolean

    /**
     * Define o template do cabeçalho do password
     */
    passwordHeaderTemplate?: (props: PasswordProps) => React.ReactNode

    /**
     * Define o template do Rodapé do password
     */
    passwordFooterTemplate?: (props: PasswordProps) => React.ReactNode

    /**
     * Define o template do password
     */
    passwordTemplate?: (props: PasswordProps) => React.ReactNode
}

interface InputBaseProps extends ApiComponentProps, ApiFieldComponentProps, InputPasswordProps, InputMaskProps {

    /**
     * Define o tipo de dados do componente
     */
    type?: Extract<HTMLInputTypeAttribute, "text" | "date" | "email" | "time" | "number" | "password">

    /**
     * A propriedade `ref` retorna a referência do componente
     */
    ref?: React.Ref<HTMLInputElement>

    /**
     * Define o tamanho do componente
     */
    sizes?: "small" | "large"

    /**
     * Define mascara no campo de dados
     */
    mask?: string | "cpf" | "cnpj"
}

export type InputProps<T extends ApiFieldModeProps> = T extends "Controlled"
    ? InputBaseProps & ApiFieldControlledProps
    : InputBaseProps & ApiFieldHookFormProps;
