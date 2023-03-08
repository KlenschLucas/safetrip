import {TablePaginationProps} from "@mui/material/TablePagination";
import {gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector} from "@mui/x-data-grid";
import {Pagination as MuiPagination} from "@mui/material";
import * as React from "react";


function DataTablePagination({
                               page,
                               onPageChange,
                             }: Pick<TablePaginationProps, 'page' | 'onPageChange'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <MuiPagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
      style={{width: '100%', display: 'flex', justifyContent: 'center', flexGrow: 1, flexShrink: 0}}
    />
  );
}

export default function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={DataTablePagination} rowsPerPage={5}
                         labelRowsPerPage=""
                         rowsPerPageOptions={[]}
                         style={{width: '100%'}}
  />;
}
