export interface TableStyleProps {
    /**
     * Define estilo da tabela como listrada
     */
    styleStriped?: boolean

    /**
     * Define estilo da tabela quando passa mouse sobre a linha da tabela
     */
    styleHover?: boolean

    /**
     * Define se as coluna das tabela por ser redimensionadas
     */
    styleResizable?: boolean

    /**
     * Define estilo da tabela com bordar ou sem borda
     */
    styleType?: "bordered" | "borderless"

    /**
     * Define o tamanho da tabela.
     */
    styleSize?: "small"
}