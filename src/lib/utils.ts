import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format cents to ZAR currency string */
export function formatZAR(cents: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

/** Format cents to a short ZAR string (e.g., R1.2M, R450K) */
export function formatZARShort(cents: number): string {
  const rands = cents / 100;
  if (rands >= 1_000_000) return `R${(rands / 1_000_000).toFixed(1)}M`;
  if (rands >= 1_000) return `R${(rands / 1_000).toFixed(0)}K`;
  return formatZAR(cents);
}

/** Format a date string to SA locale */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

/** Format a date with time */
export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

/** Generate a quote number */
export function generateQuoteNumber(): string {
  const prefix = "QT";
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `${prefix}-${y}${m}-${rand}`;
}

/** Generate a stock number */
export function generateStockNumber(): string {
  const prefix = "STK";
  const rand = Math.floor(Math.random() * 90000 + 10000);
  return `${prefix}-${rand}`;
}

/** Slugify a string */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Lead status colors */
export const LEAD_STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  CONTACTED: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  TEST_DRIVE: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  QUOTE_SENT: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  NEGOTIATING: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  CLOSED_WON: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  CLOSED_LOST: "bg-red-500/20 text-red-400 border-red-500/30",
};

/** Lead source labels */
export const LEAD_SOURCE_LABELS: Record<string, string> = {
  WHATSAPP: "WhatsApp",
  PHONE: "Phone Call",
  WEBSITE: "Website",
  AUTOTRADER: "AutoTrader",
  CARS_CO_ZA: "Cars.co.za",
  FACEBOOK: "Facebook",
  WALK_IN: "Walk-in",
  REFERRAL: "Referral",
  OTHER: "Other",
};

/** Vehicle status colors */
export const VEHICLE_STATUS_COLORS: Record<string, string> = {
  AVAILABLE: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  RESERVED: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  SOLD: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  ARCHIVED: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
};

/** SA provinces */
export const SA_PROVINCES = [
  "Gauteng",
  "Western Cape",
  "KwaZulu-Natal",
  "Eastern Cape",
  "Free State",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
];

/** SA cities */
export const SA_CITIES = [
  "Johannesburg",
  "Cape Town",
  "Durban",
  "Pretoria",
  "Sandton",
  "Port Elizabeth",
  "Bloemfontein",
  "Centurion",
  "Midrand",
  "Stellenbosch",
  "Umhlanga",
  "Randburg",
];
