import React from "react";
import { Box } from "../box";
import { InputLabel } from "../api";
import { AutocompleteProps } from "./types";
import { autocompleCore } from "./core/core";
import { autocompleteEvent } from "./core/event";
import { AutoComplete as AutoCompletePrimeReact } from "primereact/autocomplete";

/**
 * Componente - `Autocomplete`
 *
 * AutoComplete é um componente de entrada que fornece sugestões em tempo real enquanto é digitado
 */
export const Autocomplete = ({ ...props }: AutocompleteProps) => {
    return (
        <Box className={"autocomplete" + (props.className ?? "")}
             css={props.css}
             size={props.size ?? "100"}>
            <InputLabel {...props}/>
            <AutoCompletePrimeReact delay={props.searchDelay ?? 500}
                                    maxLength={props.searchMax}
                                    minLength={props.searchMin ?? 1}
                                    suggestions={props.data ?? []}
                                    value={props.value}
                                    {...autocompleCore(props)}
                                    {...autocompleteEvent(props)}/>
            <div data-name={props.name}
                 id="j_feedback"/>
        </Box>
    );
};