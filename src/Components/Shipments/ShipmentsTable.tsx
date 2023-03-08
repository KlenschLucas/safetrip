import {GridColDef} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import * as React from "react";
import {ShipmentStatusChip} from "@/Components/Shipments/ShipmentStatusChip";
import DataTable from "@/Components/Common/DataTable/DataTable";
import {GridRowsProp} from "@mui/x-data-grid/models/gridRows";
import {useState} from "react";
import {Shipment} from "@/Models/Shipment";
import {ViewShipmentModal} from "@/Components/Shipments/ViewShipmentModal";

interface ShipmentsTableProps {
  loading: boolean;
  rows: GridRowsProp<any>;
}

export function ShipmentsTable(props: ShipmentsTableProps) {
  const [viewShipmentData, setViewShipmentData] = useState<Shipment | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
        const strVal = row.value.toFixed(2).toString();
        const dollors = strVal.split(".")[0];
        const cents = strVal.split(".")[1];
        let str = "";
        for (let i = 0; i < dollors.length; i++) {
          if (i !== 0 && i % 3 === 0) {
            str = " " + str;
          }
          str = dollors[dollors.length - i - 1] + str;
        }
        console.log(dollors, str, cents)
        return `$ ${str}.${cents}`;
      }
    },
    {
      field: 'action', headerName: '', width: 150, renderCell: ({row}) => (
        <Button onClick={() => openModel(row as Shipment)}>View</Button>
      )
    },
  ];

  const openModel = (shipment: Shipment) => {
    setViewShipmentData(shipment);
    setOpenModal(true);
  }

  const closeModel = () => {
    setOpenModal(false)
  }

  return (
    <>
      <ViewShipmentModal open={openModal} shipment={viewShipmentData} close={closeModel}/>
      <DataTable loading={props.loading} rows={props.rows} columns={columns}/>
    </>
  )
}
