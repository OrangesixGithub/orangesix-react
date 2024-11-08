import React from "react";
import { InputFilterOptionsMap, InputFilterProps } from "../types";
import { handleGetValueDate, handleSetValueDate } from "../function/handle";

/**
 * Core - `Date`
 * Campo do filtro tipo data
 */
export function Date<T extends keyof InputFilterOptionsMap = "text">(props: InputFilterProps<T> & {
    options: any[]
    select: string
}) {
    let date = handleGetValueDate<T>(props.value, props.options, props.select);

    return (props.type === "date") && (
        <div className="d-flex w-100 flex-column">
            <div className="w-100 d-flex gap-2">
                {date.map((item, index) => {
                    if (index <= 2) {
                        return (
                            <input className={"form-control input-filter-field-date" + (index == 2 ? " year" : "")}
                                   disabled={props.disabled}
                                   id={(props.id ?? "input-filter") + "-" + index}
                                   key={index}
                                   name={(props.name ?? "input-filter") + "-" + index}
                                   placeholder={props.placeholder}
                                   value={item === 0 ? "" : item}
                                   onChange={event => {
                                       props.onChange(handleSetValueDate(event.target.value, index, date));
                                   }}/>
                        );
                    }
                })}
            </div>
            {props.select === "{}" && date.length > 4
                && <div className="w-100 d-flex gap-2 mt-2">
                    {date.map((item, index) => {
                        if (index >= 4) {
                            return (
                                <input className={"form-control input-filter-field-date" + (index == 6 ? " year" : "")}
                                       disabled={props.disabled}
                                       id={(props.id ?? "input-filter") + "-" + index}
                                       key={index}
                                       name={(props.name ?? "input-filter") + "-" + index}
                                       placeholder={props.placeholder}
                                       value={item === 0 ? "" : item}
                                       onChange={event => {
                                           props.onChange(handleSetValueDate(event.target.value, index, date));
                                       }}/>
                            );
                        }
                    })}
                </div>}
        </div>
    );
}