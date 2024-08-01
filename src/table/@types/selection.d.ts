export interface TableSelectionProps {
    /**
     * Objeto selecionando dentro da tabela
     */
    selection?: any

    /**
     * Define qual tipo de seleção
     */
    selectionMode?: "single" | "checkbox"

    /**
     * Realiza a seleção do element
     */
    onSelection?(value: any): void
}