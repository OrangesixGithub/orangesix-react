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
        minWidth: "28px",
        height: "28px",
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

    const styleScrollbar: CSS = {
        "&::-webkit-scrollbar": {
            height: "8px"
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#e1e1e1",
            borderRadius: "10px"
        }
    };

    return {
        root: {
            className: classNames("table-responsive w-100", props.style)
        },
        wrapper: {
            className: ThemeProvider._currentValue.css(styleScrollbar)
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
                    "p-0 d-flex mt-1",
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
export function bootstrapColumnStyle(): ColumnPassThroughOptions {

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

    const styleResizable: CSS = {
        textOverflow: "ellipsis"
    };

    const styleCheckBox: CSS = {
        ".p-checkbox-box": {
            height: "17px",
            width: "17px"
        },
        ".p-checkbox.p-highlight .p-checkbox-box": {
            background: "$primary",
            borderColor: "$primary"
        },
        ".p-checkbox:has(.p-checkbox-input:hover).p-highlight .p-checkbox-box": {
            borderColor: "$primary"
        }
    };

    return {
        sort: {
            className: ThemeProvider._currentValue.css(styleSort)
        },
        bodyCell: {
            className: classNames([
                ThemeProvider._currentValue.css(styleCheckBox),
                ThemeProvider._currentValue.css(styleResizable),
            ])
        },
        headerCell: (options) => {
            return {
                className: classNames([
                    options?.context.sorted ? ThemeProvider._currentValue.css(styleSortActive) : "",
                    ThemeProvider._currentValue.css(styleCheckBox),
                ])
            };
        }
    };
}