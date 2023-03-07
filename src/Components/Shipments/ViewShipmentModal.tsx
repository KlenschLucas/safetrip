import {GridColDef} from "@mui/x-data-grid";
import {Button, Dialog, DialogTitle, Typography} from "@mui/material";
import * as React from "react";
import {ShipmentStatusChip} from "@/Components/Shipments/ShipmentStatusChip";
import {Shipment} from "@/Models/Shipment";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

export interface ViewShipmentModalProps {
  open: boolean;
  shipment: Shipment | null;
  close: () => void;
}

export function ViewShipmentModal(props: ViewShipmentModalProps) {
  const {open, shipment, close} = props;
  const handleClose = () => {
    props.close();
  };

  if (shipment) {

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{shipment.shipmentName}</DialogTitle>
        <Typography variant="h5">{shipment.clientName}</Typography>
        <Typography variant="h5">{shipment.entryDate}</Typography>
        <Typography variant="h5">{shipment.shipmentDate}</Typography>
        <Typography variant="h5">{shipment.status}</Typography>
        <Typography variant="h5">{shipment.value}</Typography>
      </Dialog>
    );
  }
  // TODO: remove this
  return <></>
}
