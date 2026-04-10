import Link from "next/link";
import { ArrowRight, Car, Building2, BarChart3, Users, ChevronRight, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="px-6 lg:px-14 h-20 flex items-center justify-between border-b border-border/50 glass sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center glow-purple">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tighter">DealerOS</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">Pricing</Link>
          <Link href="/login" className="text-sm font-medium px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-border">
            Sign In
          </Link>
          <Link href="/onboarding" className="text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-purple hover:scale-105">
            Get Demo
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center text-center px-4 relative">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-slide-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-glow"></span>
            Built for South African Dealerships
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-tight">
            The Operating System for <br className="hidden md:block"/>
            <span className="gradient-text">Modern Dealerships</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Manage your inventory, track leads across all branches, generate ZAR quotes, and close finance deals faster. The complete B2B SaaS platform for the SA automotive market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/onboarding" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-105">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/login" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all">
              View Developer Guide
            </Link>
          </div>

          <div className="mt-20 w-full max-w-5xl rounded-2xl border border-border/50 glass p-2 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full object-cover h-[400px] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to scale</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">End-to-end dealership management tailored for the South African market.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<BarChart3 className="h-8 w-8 text-cyan-400" />}
                title="Sales Pipeline"
                description="Visual Kanban board to track leads from WhatsApp, AutoTrader, and Cars.co.za to Closed Won."
              />
              <FeatureCard 
                icon={<Car className="h-8 w-8 text-emerald-400" />}
                title="Inventory Management"
                description="Manage new and used vehicles across all branches. Track cost, asking price, and stock status."
              />
              <FeatureCard 
                icon={<Building2 className="h-8 w-8 text-purple-400" />}
                title="Multi-Branch Ready"
                description="Super admin controls for multiple branches, each with isolated data views and consolidated reporting."
              />
              <FeatureCard 
                icon={<Zap className="h-8 w-8 text-amber-400" />}
                title="Finance Deal Tracking"
                description="Track applications to banks, manage deposits, balloons, and approval statuses seamlessly."
              />
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-rose-400" />}
                title="Test Drive Bookings"
                description="Schedule and track test drives, verify licenses, and collect post-drive feedback automatically."
              />
              <FeatureCard 
                icon={<ShieldCheck className="h-8 w-8 text-blue-400" />}
                title="Quoting & Deal Sheets"
                description="Generate professional ZAR deal sheets instantly and track customer acceptance."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-24 bg-card/50 border-y border-border/50 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, SA-focused pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choose the tier that fits your dealership size. All prices in ZAR.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="rounded-2xl border border-border bg-background p-8 flex flex-col hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground text-sm mb-6">Perfect for independent dealers.</p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-extrabold">R499</span>
                  <span className="text-muted-foreground ml-2">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <PricingFeat text="1 Branch" />
                  <PricingFeat text="Up to 3 Users" />
                  <PricingFeat text="Basic Inventory Mgmt" />
                  <PricingFeat text="Lead Tracking" />
                </ul>
                <Link href="/onboarding" className="w-full py-3 rounded-lg border border-border text-center font-medium hover:bg-accent transition-colors">Get Started</Link>
              </div>

              {/* Growth - Highlighted */}
              <div className="rounded-2xl border-2 border-primary bg-background p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground text-sm mb-6">For mid-size dealer groups.</p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-extrabold">R1,499</span>
                  <span className="text-muted-foreground ml-2">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <PricingFeat text="Up to 3 Branches" />
                  <PricingFeat text="Up to 10 Users" />
                  <PricingFeat text="Advanced Analytics" />
                  <PricingFeat text="Finance Deal Tracking" />
                  <PricingFeat text="Automated Follow-ups" />
                </ul>
                <Link href="/onboarding" className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-center font-medium hover:bg-primary/90 transition-colors glow-purple">Request Demo</Link>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl border border-border bg-background p-8 flex flex-col hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground text-sm mb-6">For large national networks.</p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-extrabold">R3,499</span>
                  <span className="text-muted-foreground ml-2">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <PricingFeat text="Unlimited Branches" />
                  <PricingFeat text="Unlimited Users" />
                  <PricingFeat text="Custom Integrations" />
                  <PricingFeat text="Dedicated Success Manager" />
                  <PricingFeat text="API Access" />
                </ul>
                <Link href="/onboarding" className="w-full py-3 rounded-lg border border-border text-center font-medium hover:bg-accent transition-colors">Contact Sales</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Guide / How to run */}
        <section className="w-full py-20 px-4 border-t border-border/50">
           <div className="max-w-4xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 text-primary" /> How to run Developer Build
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>1. Ensure your PostgreSQL is running locally, or replace the <code className="text-white bg-black/50 px-1 py-0.5 rounded">DATABASE_URL</code> in <code className="text-white bg-black/50 px-1 py-0.5 rounded">.env</code> with a valid connection string.</p>
                <p>2. Push the Prisma schema:</p>
                <pre className="bg-black p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-border">
                  npx prisma db push
                </pre>
                <p>3. Generate the Prisma Client:</p>
                <pre className="bg-black p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-border">
                  npx prisma generate
                </pre>
                <p>4. Start the Development Server:</p>
                <pre className="bg-black p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-border">
                  npm run dev
                </pre>
                <p className="pt-4 text-sm border-t border-border/30">
                  Note: A mock <code className="text-white bg-black/50 px-1 py-0.5 rounded">AUTH_SECRET</code> is used in the .env by default. You will need to click the &quot;Sign In&quot; button and skip standard auth if it is not configured completely, or rely on demo mock pages.
                </p>
              </div>
           </div>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between px-6 lg:px-14">
        <p>© 2026 DealerOS South Africa. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground">Terms</Link>
          <Link href="#" className="hover:text-foreground">Privacy</Link>
          <Link href="#" className="hover:text-foreground">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:bg-accent/10 transition-colors glass group">
      <div className="mb-4 bg-background w-14 h-14 rounded-xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function PricingFeat({ text }: { text: string }) {
  return (
    <li className="flex items-center text-sm">
      <ShieldCheck className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </li>
  );
}
