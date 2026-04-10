import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DealerOS — Automotive Dealership CRM",
  description: "South Africa's premier dealership management platform. Manage sales, inventory, finance, and operations across all your branches.",
  keywords: ["dealership", "CRM", "automotive", "South Africa", "vehicle sales", "inventory management"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
