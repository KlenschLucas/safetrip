import * as React from 'react';
import {useEffect, useState} from "react";
import {Shipment} from "@/Models/Shipment";
import {ShipmentsTable} from "@/Components/Shipments/ShipmentsTable";
import mockData from '@/data/data.json';
import MainLayout from "@/Components/Layouts/MainLayout";

export default function Shipments() {
  const [rows, setRows] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading from api
  useEffect(() => {
    setLoading(true)
    const data: Shipment[] = mockData.map((item, i) => ({id: i, ...item} as Shipment));
    setRows(data)
    setLoading(false)
  }, []);

  return (
    <MainLayout title="Shipments">
      <ShipmentsTable loading={loading} rows={rows}/>
    </MainLayout>
  );
}
