import Link from "next/link";
import { ArrowRight, Car, Building2, BarChart3, Users, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <header className="px-6 lg:px-14 h-20 flex items-center justify-between border-b border-border/50 sticky top-0 z-50 bg-background">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tighter">DealerOS</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="/login" className="text-sm font-medium px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-border">Sign In</Link>
          <Link href="/onboarding" className="text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">Get Demo</Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-tight">
            The Operating System for{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Modern Dealerships</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10">
            Manage inventory, track leads, generate ZAR quotes, and close finance deals faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/onboarding" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/login" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium hover:bg-accent transition-all">
              Sign In
            </Link>
          </div>
        </section>

        <section id="features" className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to scale</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Built for the South African automotive market.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<BarChart3 className="h-8 w-8 text-cyan-400" />} title="Sales Pipeline" description="Visual Kanban to track leads from WhatsApp, AutoTrader, and Cars.co.za to Closed Won." />
              <FeatureCard icon={<Car className="h-8 w-8 text-emerald-400" />} title="Inventory Management" description="Manage new and used vehicles across all branches with full stock tracking." />
              <FeatureCard icon={<Building2 className="h-8 w-8 text-purple-400" />} title="Multi-Branch Ready" description="Super admin controls with isolated branch data and consolidated reporting." />
              <FeatureCard icon={<Zap className="h-8 w-8 text-amber-400" />} title="Finance Deal Tracking" description="Track bank applications, deposits, balloons, and approval statuses." />
              <FeatureCard icon={<Users className="h-8 w-8 text-rose-400" />} title="Test Drive Bookings" description="Schedule test drives, verify licenses, and collect post-drive feedback." />
              <FeatureCard icon={<ShieldCheck className="h-8 w-8 text-blue-400" />} title="Quoting and Deal Sheets" description="Generate professional ZAR deal sheets instantly." />
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-4 border-t border-border/50 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to modernise your dealership?</h2>
          <p className="text-muted-foreground text-lg mb-8">Join dealerships across South Africa closing more deals with DealerOS.</p>
          <Link href="/onboarding" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all">
            Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between px-6 lg:px-14">
        <p>2026 DealerOS South Africa. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground">Terms</Link>
          <Link href="#" className="hover:text-foreground">Privacy</Link>
          <Link href="#" className="hover:text-foreground">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:bg-accent/10 transition-colors group">
      <div className="mb-4 bg-background w-14 h-14 rounded-xl flex items-center justify-center border border-border">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
