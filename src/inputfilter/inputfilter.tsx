import { Box } from "../box";
import { Text } from "./core/text";
import { Date } from "./core/date";
import { InputLabel } from "../api";
import { classNames } from "primereact/utils";
import React, { useState, useEffect } from "react";
import { optionsDefault, optionsLabel } from "./const";
import { InputFilterOptionsMap, InputFilterProps } from "./types";
import { handleGetOption, handleGetValueDate, handleGetValueText, handleSetValueDate } from "./function/handle";

/**
 * Componente - `InputFilter`
 *
 * Um componente utilizado para montar o objeto de pesquisa de dados.
 * Permite alterar o seu tipo através do type: `text`, `date`, `autocomplete`.
 */
export function InputFilter<T extends keyof InputFilterOptionsMap = "text">(
    { ...props }: InputFilterProps<T>) {

    const options: any[] = (props.options ?? optionsDefault).sort((a, b) => a.length - b.length);
    const selectOptions = optionsLabel.filter(item => options?.includes(item.options as any));

    const [select, setSelect] = useState<string>(handleGetOption<T>(props.value, options));

    useEffect(() => {
        if (!props.type || props.type === "text") {
            props.onChange(handleGetValueText<T>(props.value, options) + select);
        } else if (props.type === "date") {
            let date = handleGetValueDate<T>(props.value, options, select);
            props.onChange(handleSetValueDate(date[0] as string, 0, date));
        }
    }, [select]);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box {...props}
             className={classNames([props.className, "input-filter-container"])}>
            <InputLabel {...props}/>
            <div className="input-filter-content"
                 id={props.id ?? "input-filter"}>
                <select className="form-select input-filter-select"
                        disabled={props.disabled}
                        id={(props.id ?? "input-filter") + "-select"}
                        name={(props.name ?? "input-filter") + "-select"}
                        value={select}
                        onChange={event => setSelect(event.target.value)}>
                    {selectOptions?.map(item => (
                        <option key={item.options}
                                value={item.options}>{item.label}</option>
                    ))}
                </select>
                <Text<T> {...props}
                         options={options}
                         select={select}/>
                <Date<T> {...props}
                         options={options}
                         select={select}/>
            </div>
        </Box>
    );
}