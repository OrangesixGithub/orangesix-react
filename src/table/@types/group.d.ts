export interface TableGroupProps {
    /**
     * Define a representação do objeto de agrupamento
     */
    rowGroup?: string

    /**
     * Define o tipo de agrupamento da tabela
     */
    rowGroupMode?: "subheader" | "rowgroup"

    /**
     * Define se o agrupamento vai ser expandido ou não
     */
    rowExpandable?: boolean

    /**
     * Define o template do agrupamento - Header
     */
    rowGroupHeaderTemplate?: any

    /**
     * Define o template do agrupamento - Footer
     */
    rowGroupFooterTemplate?: any
}