import { AutocompleteProps } from "../types";
import {
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent,
    AutoCompleteProps as AutoCompletePropsPrimeReact
} from "primereact/autocomplete";

/**
 * Componente - `Autocomplete`
 *
 * Define as configuração de evento do componente
 */
export function autocompleteEvent(props: AutocompleteProps): Partial<AutoCompletePropsPrimeReact> {
    return {
        completeMethod(event: AutoCompleteCompleteEvent) {
            props.onSearch(event.query);
        },
        onChange(event: AutoCompleteChangeEvent) {
            props.onChange(event.value);
        }
    };
}