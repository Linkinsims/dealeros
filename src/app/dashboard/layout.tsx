import Link from "next/link";
import { Car, LayoutDashboard, Database, CreditCard, Calendar, FileText, Settings, Users, Bell, Search } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Try to get auth session, but for demo let's allow it to render if auth fails
  // const session = await auth();
  // if (!session) redirect("/login");

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Background glow for the whole app */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-card/30 backdrop-blur-xl flex flex-col hidden md:flex relative z-10 glass">
        <Link href="/" className="h-16 flex items-center px-6 border-b border-border/50 hover:bg-accent/5 transition-colors">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center glow-purple mr-3">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">DealerOS</span>
        </Link>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <div className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Core Modules
          </div>
          <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Overview" />
          <NavItem href="/dashboard/pipeline" icon={<Database size={18} />} label="Sales Pipeline" />
          <NavItem href="/dashboard/inventory" icon={<Car size={18} />} label="Inventory" />
          <NavItem href="/dashboard/quotes" icon={<FileText size={18} />} label="Quoting & Deals" />
          <NavItem href="/dashboard/finance" icon={<CreditCard size={18} />} label="Finance Auth" />
          
          <div className="px-3 pt-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Management
          </div>
          <NavItem href="" icon={<Calendar size={18} />} label="Test Drives" />
          <NavItem href="" icon={<Users size={18} />} label="Customers" />
          <NavItem href="" icon={<Settings size={18} />} label="Settings" />
        </div>

        <div className="p-4 border-t border-border/50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer group">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-bold text-sm">
              TM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Thabo Mokoena</p>
              <p className="text-xs text-muted-foreground truncate">Velocity Motors</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* Top Header */}
        <header className="h-16 border-b border-border/50 bg-card/30 backdrop-blur-xl flex items-center justify-between px-6 z-20">
           <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search leads, stock, or quotes..." 
                className="w-full h-10 pl-10 pr-4 rounded-full bg-accent/5 max-w-sm border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm glass transition-all focus:bg-background"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/10">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive animate-[pulse-glow_2s_ease-in-out_infinite]"></span>
            </button>
            <div className="h-8 border-l border-border/50 mx-2"></div>
            <select className="h-9 text-sm bg-accent/5 border border-border/50 rounded-lg px-3 focus:outline-none focus:border-primary glass hover:bg-accent/10 transition-colors">
              <option>Sandton (HQ)</option>
              <option>Cape Town</option>
              <option>Centurion</option>
            </select>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  // To keep demo simple without path matching, we aren't doing exact active states,
  // but in a real app this would use usePathname()
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-muted-foreground hover:text-foreground hover:bg-accent/10`}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}
