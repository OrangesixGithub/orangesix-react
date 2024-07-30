export interface TableSelectionProps {
    /**
     * Objeto selecionando dentro da tabela
     */
    selection?: any

    /**
     * Realiza a seleção do element
     */
    onSelection?(value: any): void
}