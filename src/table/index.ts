import { TableColumnProps } from "./@types/column";
import { TableLazyProps, TableProps } from "./types";

export * from "./table";
export type ITableProps<T = any> = TableProps<T>
export type ITableColumnProps = TableColumnProps
export type ITableLazyProps = TableLazyProps