"use client";

import { useState } from "react";
import { demoVehicles } from "@/lib/demo-data";
import { formatZAR, VEHICLE_STATUS_COLORS } from "@/lib/utils";
import { Search, Plus, Filter, MoreHorizontal, Edit, Trash, Activity } from "lucide-react";

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState(demoVehicles);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage new and used vehicle stock.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search make, model, or stock #..." 
              className="w-full h-9 pl-9 pr-4 rounded-md bg-accent/5 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm glass"
            />
          </div>
          <button className="flex items-center gap-2 h-9 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <Plus size={16} /> Add Vehicle
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/30 glass overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-accent/5 border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Stock #</th>
                <th className="px-6 py-4 font-medium">Vehicle Details</th>
                <th className="px-6 py-4 font-medium">Condition</th>
                <th className="px-6 py-4 font-medium">Price (ZAR)</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-accent/5 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                    {vehicle.stockNumber}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-foreground">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {vehicle.variant} • {vehicle.mileage > 0 ? `${vehicle.mileage.toLocaleString()} km` : '0 km'} • {vehicle.colour}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${
                      vehicle.condition === 'NEW' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {vehicle.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-cyan-400">{formatZAR(vehicle.askingPrice)}</div>
                    <div className="text-xs text-muted-foreground mt-0.5" title="Cost Price">
                      Cost: {formatZAR(vehicle.costPrice)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider border ${VEHICLE_STATUS_COLORS[vehicle.status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 rounded"><Activity size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded"><Edit size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded"><Trash size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
