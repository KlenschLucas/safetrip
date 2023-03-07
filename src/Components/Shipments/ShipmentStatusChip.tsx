import {Chip} from "@mui/material";
import * as React from "react";
import {ShipmentStatus} from "@/Models/ShipmentStatus";

interface ShipmentStatusChipProps {
  status: ShipmentStatus
}

export function ShipmentStatusChip(props: ShipmentStatusChipProps) {
  switch (props.status) {
    case ShipmentStatus.CONFIRMED:
      return <Chip label="CONFIRMED" color="success"/>
    case ShipmentStatus.IN_PROGRESS:
      return <Chip label="IN PROGRESS" color="warning"/>
    case ShipmentStatus.ON_HOLD:
      return <Chip label="ON HOLD" color={"warning"}/>
    default:
      return (
        <Chip label={props.status}/>
      )
  }
}
