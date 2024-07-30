import { PropsModule, STOREAction } from "../@types/context";

export function reducer(state: PropsModule, action: STOREAction): any {
    switch (action.type) {
        case "setLazy":
            return { ...state, lazy: action.payload };
        case "setPaginatorRow":
            return { ...state, paginatorRow: action.payload };
        case "setOnSelected":
            return { ...state, selection: action.payload };
        default:
            return { ...state };
    }
}