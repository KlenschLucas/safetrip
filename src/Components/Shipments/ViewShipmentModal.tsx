import {GridColDef} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import * as React from "react";
import {ShipmentStatusChip} from "@/Components/Shipments/ShipmentStatusChip";


const columns: GridColDef[] = [
  {field: 'shipmentName', headerName: 'Shipment Name'},
  {field: 'clientName', headerName: 'Client Name'},
  {field: 'entryDate', headerName: 'Entry Date'},
  {field: 'shipmentDate', headerName: 'Shipment Date'},
  {
    field: 'status', headerName: 'Status', renderCell: ({row}) => {
      return <ShipmentStatusChip status={row.status}/>;
    }
  },
  {
    field: 'value', headerName: 'value', width: 150, renderCell: ({row}) => {
      console.log(row)
      const val = row.value.toFixed(2).toString().split("");
      let str = "$ ";
      //  todo: come back and fix
      return str + val.join("");
    }
  },
  {
    field: 'action', headerName: '', width: 150, renderCell: params => (
      <Button>View</Button>
    )
  },
];
