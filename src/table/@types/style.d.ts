export interface TableStyleProps {
    /**
     * Define o estilo do container da tabela
     */
    style?: object

    /**
     * Define estilo no elemento table
     */
    styleTable?: object

    /**
     * Define o tamanho da tabela.
     */
    styleSize?: "small"

    /**
     * Define estilo da tabela como listrada
     */
    styleStriped?: boolean

    /**
     * Define estilo da tabela quando passa mouse sobre a linha da tabela
     */
    styleHover?: boolean

    /**
     * Define estilo da tabela com bordar ou sem borda
     */
    styleType?: "bordered" | "borderless"

    /**
     * Define se as coluna das tabela por ser redimensionadas
     */
    styleResizable?: boolean
}