"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatZARShort } from "@/lib/utils";
import { demoMonthlyStats, demoLeads, demoVehicles, demoLeadSourceStats } from "@/lib/demo-data";
import { ArrowUpRight, ArrowDownRight, Car, Users, DollarSign, Target } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1 text-sm">Here's what's happening at Velocity Motors Sandton.</p>
        </div>
        <div className="flex bg-accent/10 border border-border/50 rounded-lg p-1 glass">
          <button className="px-3 py-1 text-sm font-medium rounded-md bg-background shadow-sm border border-border">Month</button>
          <button className="px-3 py-1 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground">Quarter</button>
          <button className="px-3 py-1 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground">Year</button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard 
          title="Total Revenue (Mar)" 
          value="R 9.5M" 
          change="+14.5%" 
          trend="up" 
          icon={<DollarSign className="h-5 w-5 text-emerald-500" />} 
          color="border-emerald-500/20"
        />
        <KpiCard 
          title="Vehicles Sold" 
          value="15" 
          change="+36%" 
          trend="up" 
          icon={<Car className="h-5 w-5 text-blue-500" />} 
          color="border-blue-500/20"
        />
        <KpiCard 
          title="Active Leads" 
          value="65" 
          change="-4%" 
          trend="down" 
          icon={<Users className="h-5 w-5 text-amber-500" />} 
          color="border-amber-500/20"
        />
        <KpiCard 
          title="Conversion Rate" 
          value="23.1%" 
          change="+2.4%" 
          trend="up" 
          icon={<Target className="h-5 w-5 text-purple-500" />} 
          color="border-purple-500/20"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Revenue Chart */}
        <div className="col-span-4 rounded-xl border border-border/50 bg-card/30 p-6 glass relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
          <h3 className="font-semibold text-lg mb-6 flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-primary" />
            Revenue Overview
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demoMonthlyStats} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="month" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis 
                  stroke="#a1a1aa" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `R${(value/100000000).toFixed(0)}M`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                  itemStyle={{ color: '#fafafa' }}
                  formatter={(value) => [`R ${(Number(value)/100000).toFixed(0)}k`, 'Revenue']}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#6d28d9" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#18181b', stroke: '#6d28d9', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#7c3aed', stroke: '#fafafa', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="col-span-3 rounded-xl border border-border/50 bg-card/30 p-6 glass">
          <h3 className="font-semibold text-lg mb-6">Lead Sources (Month)</h3>
          <div className="space-y-5">
            {demoLeadSourceStats.slice(0, 5).map((source) => (
              <div key={source.source} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{source.source}</span>
                  <span className="text-muted-foreground">{source.count} ({source.percentage}%)</span>
                </div>
                <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full relative" 
                    style={{ width: `${source.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 w-fll h-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, change, trend, icon, color }: any) {
  return (
    <div className={`p-6 rounded-xl border bg-card/30 glass relative overflow-hidden group ${color} hover:border-primary/50 transition-colors`}>
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="p-2 bg-background rounded-lg border border-border group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold tracking-tight">{value}</h2>
      </div>
      <div className={`mt-2 flex items-center text-xs font-medium ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
        {change} from last month
      </div>
    </div>
  );
}
