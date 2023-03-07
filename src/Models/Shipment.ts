import {ShipmentStatus} from "@/Models/ShipmentStatus";

/**
 * Shipment Data
 */
export interface Shipment {
  id: number;
  shipmentName: string;
  clientName: string;
  entryDate: string;
  shipmentDate: string;
  status: ShipmentStatus;
  value: number;
}
