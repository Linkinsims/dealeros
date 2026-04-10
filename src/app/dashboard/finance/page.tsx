"use client";

import { useState } from "react";
import { demoFinanceDeals } from "@/lib/demo-data";
import { formatZAR } from "@/lib/utils";
import { Search, Plus, Filter, Building, CheckCircle2, Clock, XCircle, Banknote, Percent } from "lucide-react";

export default function FinancePage() {
  const [deals, setDeals] = useState(demoFinanceDeals);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'APPROVED': 
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"><CheckCircle2 size={12}/> Approved</span>;
      case 'FUNDED': 
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-500 border border-cyan-500/20"><Banknote size={12}/> Funded</span>;
      case 'DECLINED': 
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20"><XCircle size={12}/> Declined</span>;
      case 'SUBMITTED': 
      case 'PENDING':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20"><Clock size={12}/> Submitted</span>;
      default: 
        return <span className="px-2.5 py-1 rounded-md text-xs bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Finance Deals</h1>
          <p className="text-muted-foreground mt-1 text-sm">Track bank submissions and F&I performance.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search ID, Bank, etc..." 
              className="w-full h-9 pl-9 pr-4 rounded-md bg-accent/5 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm glass"
            />
          </div>
          <button className="flex items-center gap-2 h-9 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <Plus size={16} /> New Application
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/30 glass overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-accent/5 border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Deal ID</th>
                <th className="px-6 py-4 font-medium">Bank</th>
                <th className="px-6 py-4 font-medium">Finance Amt</th>
                <th className="px-6 py-4 font-medium">Terms</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">F&I Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {deals.map((deal) => (
                <tr key={deal.id} className="hover:bg-accent/5 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs font-semibold text-muted-foreground">
                    {deal.id.toUpperCase()}
                    <div className="text-[10px] text-muted-foreground/70 mt-1">Ref: {deal.quoteId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      {deal.bank}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary">{formatZAR(deal.financeAmount)}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Dep: {formatZAR(deal.depositAmount)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Rate</span>
                        <span className="font-medium text-foreground flex items-center"><Percent size={10} className="mr-0.5"/> {deal.interestRate}%</span>
                      </div>
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Term</span>
                        <span className="font-medium text-foreground">{deal.term}m</span>
                      </div>
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Monthly ZAR</span>
                        <span className="font-medium text-foreground">{deal.monthlyPayment ? formatZAR(deal.monthlyPayment) : 'TBD'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(deal.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 px-3 py-1.5 rounded transition-colors">
                      Update Bank Status
                    </button>
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
