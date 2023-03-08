import {DataGrid, GridLogicOperator, GridToolbar} from "@mui/x-data-grid";
import * as React from "react";
import {GridRowsProp} from "@mui/x-data-grid/models/gridRows";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";
import CustomPagination from "./DataTablePagination";
import {DataTableToolbar} from "./DataTableToolbar";

interface DataTableProps {
  loading: boolean;
  rows: GridRowsProp<any>;
  columns: GridColDef<any>[];
}

export default function DataTable(props: DataTableProps) {
  const [filterValue, setFilterValue] = React.useState('');

  const handleFilterChange = (search: string) => {
    setFilterValue(search);
  };

  return (
    <div style={{height: "100%", width: '100%'}}>
      <DataGrid rows={props.rows} columns={props.columns}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableColumnMenu

                slots={{
                  pagination: CustomPagination,
                  // toolbar: GridToolbar
                  toolbar: () => <DataTableToolbar filterValue={filterValue} setFilterValue={handleFilterChange}
                                                   id="datatable-filter-input"/>
                  // toolbar: () => <DataTableToolbar filterValue={filterValue} setFilterValue={handleFilterChange} id="datatable-filter-input"/>
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  }
                }
                }


        // disableColumnFilter={true}
                autoHeight
                initialState={{
                  pagination: {paginationModel: {pageSize: 5},},
                  filter: {
                    filterModel: {
                      items: [],
                      quickFilterLogicOperator: GridLogicOperator.Or,
                    },
                  },
                }}
      />
    </div>
  )
}
