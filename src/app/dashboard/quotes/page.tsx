"use client";

import { useState } from "react";
import { demoQuotes } from "@/lib/demo-data";
import { formatZAR, formatZARShort } from "@/lib/utils";
import { Search, Plus, Filter, FileText, CheckCircle2, XCircle, Clock, Download } from "lucide-react";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState(demoQuotes);

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'ACCEPTED': return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'REJECTED': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'SENT': return <Clock className="h-4 w-4 text-amber-500" />;
      default: return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ACCEPTED': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'REJECTED': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'SENT': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quotes & Deals</h1>
          <p className="text-muted-foreground mt-1 text-sm">Generate and track customer ZAR quotes.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search quotes..." 
              className="w-full h-9 pl-9 pr-4 rounded-md bg-accent/5 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm glass"
            />
          </div>
          <button className="flex items-center gap-2 h-9 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <Plus size={16} /> New Quote
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="p-4 rounded-xl border border-border/50 bg-card/30 glass">
          <p className="text-sm font-medium text-muted-foreground">Total Value (Pending)</p>
          <p className="text-2xl font-bold text-amber-400 mt-1">{formatZARShort(63340000)}</p>
        </div>
        <div className="p-4 rounded-xl border border-border/50 bg-card/30 glass">
          <p className="text-sm font-medium text-muted-foreground">Total Value (Accepted)</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{formatZARShort(99180000)}</p>
        </div>
        <div className="p-4 rounded-xl border border-border/50 bg-card/30 glass">
          <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
          <p className="text-2xl font-bold text-cyan-400 mt-1">66%</p>
        </div>
        <div className="p-4 rounded-xl border border-border/50 bg-card/30 glass">
          <p className="text-sm font-medium text-muted-foreground">Avg. Discount Given</p>
          <p className="text-2xl font-bold text-purple-400 mt-1">{formatZARShort(1166666)}</p>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/30 glass overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-accent/5 border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Quote ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Vehicle Value</th>
                <th className="px-6 py-4 font-medium">Trade-in</th>
                <th className="px-6 py-4 font-medium">Final Amount</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {quotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-accent/5 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs font-semibold text-cyan-400">
                    {quote.quoteNumber}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Linked Lead #{quote.leadId.substring(quote.leadId.length - 4)}</div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {formatZAR(quote.vehiclePrice)}
                  </td>
                  <td className="px-6 py-4 text-amber-500/80">
                    {quote.tradeInValue > 0 ? `-${formatZAR(quote.tradeInValue)}` : '-'}
                  </td>
                  <td className="px-6 py-4 font-bold text-primary">
                    {formatZAR(quote.totalAmount)}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">
                    {new Date(quote.createdAt).toLocaleDateString('en-ZA')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border ${getStatusColor(quote.status)}`}>
                      {getStatusIcon(quote.status)}
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 rounded transition-colors" title="Download PDF">
                      <Download size={16} />
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
