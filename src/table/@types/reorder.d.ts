export interface TableReorderProps {

    /**
     * Quando ativo, linhas podem ser reordenadas usando drag and drop.
     */
    reorderableRows?: boolean;

    /**
     * Quando ativo, colunas podem ser reordenadas usando drag and drop.
     */
    reorderableColumns?: boolean;

    /**
     * Callback para atualizar nova ordem.
     */
    onRowReorder?(event: any): void;
}