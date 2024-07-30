import React from "react";
import { SortOrder } from "primereact/datatable";

export type PropsContext = {
    DTOState: any;
    DTOSetState: React.Dispatch<any>;
};

export type STOREAction = {
    type: STOREType;
    payload: any;
};

export type PropsModule = {
    lazy?: {
        sortField?: string | null
        sortOrder?: SortOrder
        paginationRow?: number
        paginationPage?: number
    }
};

export type STOREType =
    | "setLazy"
    | "setPaginatorRow"
    | "setOnSelected"
