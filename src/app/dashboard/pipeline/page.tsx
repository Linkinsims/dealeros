"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { demoLeads } from "@/lib/demo-data";
import { LEAD_STATUS_COLORS, formatZARShort } from "@/lib/utils";
import { Search, Plus, Filter, MessageCircle, Phone, Calendar, Mail } from "lucide-react";

// Kanban columns
const COLUMNS = [
  { id: "NEW", title: "New Lead" },
  { id: "CONTACTED", title: "Contacted" },
  { id: "TEST_DRIVE", title: "Test Drive" },
  { id: "QUOTE_SENT", title: "Quote Sent" },
  { id: "NEGOTIATING", title: "Negotiating" },
];

export default function PipelinePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [leads, setLeads] = useState(demoLeads.filter(l => l.status !== "CLOSED_WON" && l.status !== "CLOSED_LOST"));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const { source, destination, draggableId } = result;
    
    if (source.droppableId !== destination.droppableId) {
      setLeads(prev => prev.map(lead => 
        lead.id === draggableId 
          ? { ...lead, status: destination.droppableId as any }
          : lead
      ));
    }
  };

  if (!isMounted) return null;

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col pt-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Pipeline</h1>
          <p className="text-muted-foreground mt-1 text-sm">Drag and drop leads to update their status.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full h-9 pl-9 pr-4 rounded-md bg-accent/5 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm glass"
            />
          </div>
          <button className="p-2 border border-border bg-card rounded-md hover:bg-accent/50 transition-colors">
            <Filter size={18} />
          </button>
          <button className="flex items-center gap-2 h-9 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <Plus size={16} /> New Lead
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-4 h-full pb-4 items-start min-w-max">
            {COLUMNS.map(column => {
              const columnLeads = leads.filter(l => l.status === column.id);
              
              return (
                <div key={column.id} className="w-80 flex flex-col h-full bg-accent/5 rounded-xl border border-border/50 glass">
                  <div className={`p-3 border-b border-border/50 flex justify-between items-center rounded-t-xl bg-gradient-to-b from-card/80 to-transparent`}>
                    <div className="flex items-center gap-2">
                      <div className={`h-2.5 w-2.5 rounded-full ${LEAD_STATUS_COLORS[column.id] ? LEAD_STATUS_COLORS[column.id].split(' ')[0] : 'bg-gray-500'}`} />
                      <h3 className="font-semibold text-sm">{column.title}</h3>
                    </div>
                    <span className="text-xs font-semibold bg-background border border-border px-2 py-0.5 rounded-full text-muted-foreground">
                      {columnLeads.length}
                    </span>
                  </div>
                  
                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <div 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        className={`flex-1 p-3 overflow-y-auto space-y-3 transition-colors ${snapshot.isDraggingOver ? 'bg-primary/5' : ''}`}
                      >
                        {columnLeads.map((lead, index) => (
                          <Draggable key={lead.id} draggableId={lead.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`kanban-card p-4 rounded-lg border bg-card relative ${
                                  snapshot.isDragging ? 'shadow-2xl border-primary scale-105 z-50' : 'border-border/50 shadow-sm hover:border-primary/30'
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium text-sm text-foreground">{lead.firstName} {lead.lastName}</h4>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-muted-foreground border border-border/50">
                                    {lead.source}
                                  </span>
                                </div>
                                
                                {lead.budget && (
                                  <div className="text-sm font-semibold mb-3 text-cyan-400">
                                    Budget: {formatZARShort(lead.budget)}
                                  </div>
                                )}
                                
                                <div className="flex items-center justify-between text-muted-foreground mt-4 pt-3 border-t border-border/30">
                                  <div className="flex gap-2">
                                    <button className="hover:text-primary transition-colors"><MessageCircle size={14} /></button>
                                    <button className="hover:text-primary transition-colors"><Phone size={14} /></button>
                                  </div>
                                  <span className="text-xs bg-background px-2 py-1 rounded border border-border/50">
                                    {new Date(lead.createdAt).toLocaleDateString('en-ZA', { month: 'short', day: 'numeric' })}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
