import {GridToolbarContainer} from "@mui/x-data-grid";
import {TextField} from "@mui/material";
import * as React from "react";

export function DataTableToolbar(props: any) {
  const {filterValue, setFilterValue} = props;

  const handleFilterChange = (event: any) => {
    setFilterValue(event.target.value || null);
  };

  return (
    <GridToolbarContainer>
      <TextField
        variant="standard"
        value={filterValue || ''}
        onChange={handleFilterChange}
        placeholder="Filter..."
        style={{width: '100%'}}
      />
    </GridToolbarContainer>
  );
}
