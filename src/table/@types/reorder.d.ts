export interface TableReorderProps {

    /**
     * Quando ativo, linhas e colunas podem ser reordenadas usando drag and drop.
     */
    reorderable?: "rows" | "columns" | "all"

    /**
     * Callback para atualizar nova ordem.
     */
    onReorder?(event: any): void;
}