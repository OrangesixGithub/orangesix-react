import { TableProps } from "./types";
import { classNames } from "primereact/utils";
import { ColumnPassThroughOptions } from "primereact/column";
import { DataTablePassThroughOptions } from "primereact/datatable";

/**
 * Realiza a personalização na TABLE
 */
export function bootstrapTableStyle(props: TableProps<any>): DataTablePassThroughOptions {
    return {
        root: {
            className: "table-responsive"
        },
        table: {
            className: classNames([
                "table",
                props.styleHover ? "table-hover" : "",
                props.styleStriped ? "table-striped" : "",
                props.styleSize === "small" ? "table-sm" : "",
                props.styleType === "bordered" ? "table-bordered" : props.styleType === "borderless" ? "table-borderless" : "",
            ]),
        },
        header: {
            className: "table-header",
        },
        footer: {
            className: "table-footer"
        },
        paginator: {
            root: {
                className: classNames([
                    "p-0 d-flex mb-1",
                    `justify-content-${props.paginatorAlign ?? "center"}`
                ]),
                style: { borderTop: "none" }
            },
            firstPageButton: {
                style: { borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }
            },
            lastPageButton: {
                style: { borderTopRightRadius: "3px", borderBottomRightRadius: "3px" }
            }
        }
    };
}

/**
 * Realiza a personalização na COLUNA da tabela
 */
export function bootstrapColumnStyle(): ColumnPassThroughOptions {

    return {
        sort: {
            className: "table-sort"
        },
        headerCell: (options) => {
            return {
                className: classNames([
                    options?.context.sorted ? "table-sort-active" : "",
                ])
            };
        },
        bodyCell: {
            className: "table-resizable"
        },
    };
}