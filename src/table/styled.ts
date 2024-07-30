import { TableProps } from "./types";
import { CSS } from "@stitches/react";
import { ThemeProvider } from "../api";
import { classNames } from "primereact/utils";
import { circleStyle } from "../api/mixins/styled";
import { TableColumnProps } from "./@types/column";
import { ColumnPassThroughOptions } from "primereact/column";
import { DataTablePassThroughOptions } from "primereact/datatable";

/**
 * Realiza a personalização na TABLE
 */
export function bootstrapTableStyle(props: TableProps<any>): DataTablePassThroughOptions {

    const stylePagination: CSS = {
        fontSize: ".9em",
        minWidth: "30px",
        height: "30px",
        color: "$secondary",
    };

    const stylePaginationActive: CSS = {
        ".p-highlight": {
            background: "$primary",
            border: "none",
            color: "#fff"
        }
    };

    const styleSelected: CSS = {
        "& tr[tabindex=\"0\"]": {
            background: "$light",
            outline: "none"
        },
        ".p-highlight": {
            background: "$light",

            "& td": {
                fontWeight: "bolder"
            }
        }
    };

    return {
        root: {
            className: classNames("table-responsive w-100", props.style)
        },
        table: {
            className: classNames([
                "table w-100 mb-2",
                props.styleHover ? "table-hover" : "",
                props.styleStriped ? "table-striped" : "",
                props.styleSize === "small" ? "table-sm" : "",
                props.styleType === "bordered" ? "table-bordered" : props.styleType === "borderless" ? "table-borderless" : "",
                props.styleTable
            ]),
        },
        tbody: {
            className: ThemeProvider._currentValue.css(styleSelected),
        },
        paginator: {
            root: {
                className: classNames([
                    "p-0 d-flex",
                    `justify-content-${props.paginatorAlign ?? "center"}`
                ]),
                style: { borderTop: "none" }
            },
            pages: {
                className: ThemeProvider._currentValue.css(stylePaginationActive)
            },
            firstPageButton: {
                className: ThemeProvider._currentValue.css(stylePagination),
                style: { borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }
            },
            pageButton: {
                className: ThemeProvider._currentValue.css(stylePagination)
            },
            lastPageButton: {
                className: ThemeProvider._currentValue.css(stylePagination),
                style: { borderTopRightRadius: "3px", borderBottomRightRadius: "3px" }
            }
        }
    };
}

/**
 * Realiza a personalização na COLUNA da tabela
 */
export function bootstrapColumnStyle(props: TableColumnProps): ColumnPassThroughOptions {

    const styleSort: CSS = {
        cursor: "pointer",
        color: "$secondary",

        "& svg": {
            width: "13px",
            height: "13px"
        },

        "+ span[data-pc-section=\"sortbadge\"]": { ...circleStyle(16) }
    };

    const styleSortActive: CSS = {
        "& span[data-pc-section=\"sort\"]": {
            "& svg": {
                color: "$primary"
            },
        }
    };

    return {
        sort: {
            className: ThemeProvider._currentValue.css(styleSort)
        },
        headerCell: (options) => {
            return {
                className: classNames([
                    options?.context.sorted ? ThemeProvider._currentValue.css(styleSortActive) : ""
                ])
            };
        }
    };
}