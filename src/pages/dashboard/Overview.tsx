import { ArrowDown, ArrowUp, MessageSquare, Sparkles, Target, Timer } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { d: "Mon", tickets: 142, leads: 88 },
  { d: "Tue", tickets: 165, leads: 124 },
  { d: "Wed", tickets: 198, leads: 142 },
  { d: "Thu", tickets: 172, leads: 168 },
  { d: "Fri", tickets: 215, leads: 198 },
  { d: "Sat", tickets: 188, leads: 156 },
  { d: "Sun", tickets: 224, leads: 212 },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Tickets this month" value="1,284" delta="+12.4%" up icon={MessageSquare} />
        <StatCard label="Auto-resolved" value="92%" delta="+4.2%" up icon={Sparkles} highlight />
        <StatCard label="Avg response" value="8s" delta="-31%" up icon={Timer} />
        <StatCard label="Leads qualified" value="2,142" delta="+18%" up icon={Target} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card rounded-2xl border border-ink/10 p-6 shadow-soft">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-display text-xl">Activity over time</h3>
              <p className="text-sm text-muted-foreground">Tickets resolved & leads qualified — last 7 days</p>
            </div>
            <div className="flex gap-4 text-xs font-mono">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-ink" /> Tickets</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime" /> Leads</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--ink))" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(var(--ink))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--lime))" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="hsl(var(--lime))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--ink))", border: "none", borderRadius: 12, color: "hsl(var(--cream))" }} />
                <Area type="monotone" dataKey="tickets" stroke="hsl(var(--ink))" strokeWidth={2.5} fill="url(#g1)" />
                <Area type="monotone" dataKey="leads" stroke="hsl(var(--lime))" strokeWidth={2.5} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-ink text-cream rounded-2xl p-6 shadow-elegant">
          <h3 className="font-display text-xl mb-1">AI savings</h3>
          <p className="text-cream/60 text-sm mb-6">Estimated value vs. human-only</p>
          <div className="font-display text-5xl mb-2">$47,820</div>
          <div className="text-xs font-mono uppercase tracking-widest text-lime">+ this month</div>
          <div className="mt-8 space-y-3 pt-6 border-t border-cream/10">
            <Row label="Support automation" value="$28,400" />
            <Row label="Lead conversion lift" value="$12,200" />
            <Row label="Time saved (agents)" value="$7,220" />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-ink/10 p-6 shadow-soft">
        <h3 className="font-display text-xl mb-4">Recent activity</h3>
        <div className="divide-y divide-ink/5">
          {[
            { who: "Helix AI", what: "auto-resolved ticket #4928 (Refund policy)", when: "2m ago", color: "lime" },
            { who: "Helix AI", what: "qualified lead Jordan Klein (Acme Co) — score 87", when: "8m ago", color: "lime" },
            { who: "Maya Chen", what: "took over ticket #4920 from AI", when: "14m ago", color: "info" },
            { who: "Helix AI", what: "booked meeting with Lia Park for Thu 2pm", when: "32m ago", color: "lime" },
            { who: "System", what: "1,000 tickets processed this week", when: "1h ago", color: "muted" },
          ].map((e, i) => (
            <div key={i} className="py-3 flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${e.color === "lime" ? "bg-lime" : e.color === "info" ? "bg-info" : "bg-muted-foreground"}`} />
              <div className="flex-1"><span className="font-medium">{e.who}</span> <span className="text-muted-foreground">{e.what}</span></div>
              <span className="text-xs font-mono text-muted-foreground">{e.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, delta, up, icon: Icon, highlight = false }: any) => (
  <div className={`rounded-2xl p-6 border ${highlight ? "bg-lime border-lime" : "bg-card border-ink/10 shadow-soft"}`}>
    <div className="flex items-start justify-between mb-6">
      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${highlight ? "bg-ink text-lime" : "bg-secondary text-ink"}`}>
        <Icon className="h-4 w-4" />
      </div>
      <span className={`text-xs font-mono flex items-center gap-1 ${up ? "text-success" : "text-destructive"} ${highlight ? "text-ink" : ""}`}>
        {up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />} {delta}
      </span>
    </div>
    <div className="font-display text-3xl mb-1">{value}</div>
    <div className={`text-xs font-mono uppercase tracking-widest ${highlight ? "text-ink/70" : "text-muted-foreground"}`}>{label}</div>
  </div>
);

const Row = ({ label, value }: any) => (
  <div className="flex justify-between text-sm">
    <span className="text-cream/70">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Overview;
