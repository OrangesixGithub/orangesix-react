import { Box } from "../box";
import React, { forwardRef } from "react";
import { TablePivotProps, TablePivotRefProps } from "./types";
import { translation } from "./lang/pt-br";
import { handleToolbarOptions } from "./function/handle";
import * as WebDataRocksReact from "@webdatarocks/react-webdatarocks";

export const TablePivot = forwardRef<TablePivotRefProps, TablePivotProps>(({ toolbar = true, ...props }, ref) => {
    return (
        <Box className={"pivot-table " + (props.className ?? "")}
             size={props.size}>
            <WebDataRocksReact.Pivot
                report={{
                    dataSource: {
                        data: props.pivotDataSource
                    },
                    options: props.pivotOptions,
                    slice: props.pivotSlice,
                    localization: translation,
                }}
                beforetoolbarcreated={(toolbar: any) => handleToolbarOptions(toolbar, props.toolbarOptions ?? {})}
                height={props.height}
                ref={ref}
                toolbar={toolbar}
                width="100%"/>
        </Box>
    );
});