import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { Bot, LayoutDashboard, MessageSquare, Settings, Target, Ticket, Users, LogOut, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/tickets", label: "Tickets", icon: Ticket },
  { to: "/dashboard/leads", label: "Leads", icon: Target },
  { to: "/dashboard/agents", label: "Agents", icon: Users },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const current = nav.find((n) => (n.end ? pathname === n.to : pathname.startsWith(n.to)))?.label || "Dashboard";

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-ink text-cream flex flex-col fixed inset-y-0 left-0">
        <div className="p-6 border-b border-cream/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-lime flex items-center justify-center">
              <Bot className="h-4 w-4 text-ink" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">Helix.</span>
          </Link>
        </div>

        <div className="px-3 py-4 border-b border-cream/10">
          <div className="px-3 py-2.5 rounded-lg bg-cream/5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-lime/20 flex items-center justify-center text-lime font-display font-semibold text-sm">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Acme Inc.</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-cream/50">Pro plan</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive ? "bg-lime text-ink font-medium" : "text-cream/70 hover:text-cream hover:bg-cream/5"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-cream/10">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-cream/70 hover:bg-cream/5">
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-cream border-b border-ink/10 sticky top-0 z-30 flex items-center justify-between px-8">
          <h1 className="font-display text-xl">{current}</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search…" className="h-9 pl-9 w-64 bg-card border-ink/10" />
            </div>
            <button className="h-9 w-9 rounded-lg bg-card border border-ink/10 flex items-center justify-center hover:bg-secondary">
              <Bell className="h-4 w-4" />
            </button>
            <div className="h-9 w-9 rounded-full bg-ink text-cream flex items-center justify-center text-sm font-medium">SC</div>
          </div>
        </header>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
