import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";
import {GridRowsProp} from "@mui/x-data-grid/models/gridRows";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";
import CustomPagination from "@/Components/Common/DataTable/DataTablePagination";
import {DataTableToolbar} from "@/Components/Common/DataTable/DataTableToolbar";

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
                slots={{
                  pagination: CustomPagination,
                  toolbar: () => <DataTableToolbar filterValue={filterValue} setFilterValue={handleFilterChange}/>
                }}
        // disableColumnFilter={true}
                autoHeight
                initialState={{
                  pagination: {paginationModel: {pageSize: 5},},
                }}
      />
    </div>
  )
}
