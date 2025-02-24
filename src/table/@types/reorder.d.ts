export interface TableReorderProps {

    /**
     * Quando ativo, linhas e colunas podem ser reordenadas usando drag and drop.
     */
    reorder?: "rows" | "columns" | "all"

    /**
     * Callback para atualizar nova ordem.
     */
    onReorder?(data: Array<{ id: any, order: any }>): void;
}