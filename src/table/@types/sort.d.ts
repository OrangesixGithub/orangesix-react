import { SortOrder } from "primereact/datatable";

export interface TableSortProps {
    
    /**
     * Método para realizar ordernação manual
     */
    onSort?(field: string, order: SortOrder): void
}