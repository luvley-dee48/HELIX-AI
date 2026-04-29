import { useState } from "react";
import { Bot, Filter, Headphones, Send, User, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "open" | "auto-resolved" | "awaiting agent" | "closed";

const tickets = [
  { id: "T-4928", customer: "Jordan Klein", subject: "Refund policy question", status: "auto-resolved" as Status, label: "Billing", time: "2m" },
  { id: "T-4927", customer: "Lia Park", subject: "Cannot upload CSV", status: "awaiting agent" as Status, label: "Bug", time: "12m" },
  { id: "T-4926", customer: "Marcus Webb", subject: "How do I invite my team?", status: "auto-resolved" as Status, label: "Onboarding", time: "18m" },
  { id: "T-4925", customer: "Priya Shah", subject: "Integration with HubSpot", status: "open" as Status, label: "Feature", time: "34m" },
  { id: "T-4924", customer: "Tom Liu", subject: "Login throws 500 error", status: "awaiting agent" as Status, label: "Bug", time: "47m" },
  { id: "T-4923", customer: "Anna Reyes", subject: "Cancel my subscription", status: "auto-resolved" as Status, label: "Billing", time: "1h" },
  { id: "T-4922", customer: "Kenji Sato", subject: "Discount for annual?", status: "closed" as Status, label: "Sales", time: "2h" },
  { id: "T-4921", customer: "Rosa Diaz", subject: "Two-factor not working", status: "auto-resolved" as Status, label: "Account", time: "3h" },
];

const statusStyles: Record<Status, string> = {
  open: "bg-warning/15 text-warning border-warning/30",
  "auto-resolved": "bg-lime/30 text-ink border-lime",
  "awaiting agent": "bg-info/15 text-info border-info/30",
  closed: "bg-muted text-muted-foreground border-border",
};

const Tickets = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ticket = tickets.find((t) => t.id === selected);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {(["all", "open", "auto-resolved", "awaiting agent", "closed"] as const).map((s, i) => (
          <button key={s} className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border ${i === 0 ? "bg-ink text-cream border-ink" : "bg-card border-ink/10 text-muted-foreground hover:border-ink/30"}`}>{s}</button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm"><Filter className="h-3.5 w-3.5" /> Filter</Button>
          <Input placeholder="Search tickets…" className="h-9 w-56 bg-card border-ink/10" />
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-ink/10 shadow-soft overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-ink/10 bg-secondary/50">
              {["ID", "Customer", "Subject", "Status", "Label", "Updated"].map((h) => (
                <th key={h} className="text-left px-6 py-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} onClick={() => setSelected(t.id)} className="border-b border-ink/5 hover:bg-secondary/30 cursor-pointer transition-colors">
                <td className="px-6 py-4 font-mono text-sm">{t.id}</td>
                <td className="px-6 py-4 text-sm font-medium">{t.customer}</td>
                <td className="px-6 py-4 text-sm">{t.subject}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border ${statusStyles[t.status]}`}>{t.status}</span>
                </td>
                <td className="px-6 py-4"><Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider">{t.label}</Badge></td>
                <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{t.time} ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {ticket && (
        <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-end md:items-center justify-end" onClick={() => setSelected(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-card w-full md:w-[480px] h-full flex flex-col shadow-elegant animate-slide-up">
            <div className="p-5 border-b border-ink/10 flex items-start justify-between">
              <div>
                <div className="font-mono text-xs text-muted-foreground">{ticket.id} · {ticket.label}</div>
                <h3 className="font-display text-xl mt-1">{ticket.subject}</h3>
                <div className="text-sm text-muted-foreground mt-1">from {ticket.customer}</div>
              </div>
              <button onClick={() => setSelected(null)} className="h-8 w-8 rounded-lg hover:bg-secondary flex items-center justify-center"><X className="h-4 w-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-secondary/30">
              <Bubble role="user" name={ticket.customer} text="Hi, I'd like to understand your refund policy if I cancel mid-month." />
              <Bubble role="ai" name="Helix AI" text="Hey! Refunds are pro-rated for the unused portion of your billing period. I can also forward this to a human if you'd prefer." />
              <Bubble role="user" name={ticket.customer} text="Pro-rated works. How do I cancel?" />
              <Bubble role="ai" name="Helix AI" text="Go to Settings → Billing → Cancel subscription. Want me to send a step-by-step?" />
              <Bubble role="agent" name="Maya Chen" text="Jumping in — I just sent the walk-through to your email too. Anything else?" />
            </div>
            <div className="p-4 border-t border-ink/10 flex gap-2">
              <Input placeholder="Reply as agent…" className="bg-cream border-ink/10" />
              <Button variant="ink" size="icon"><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Bubble = ({ role, name, text }: { role: "user" | "ai" | "agent"; name: string; text: string }) => {
  if (role === "user") {
    return (
      <div className="flex items-end gap-2 justify-end">
        <div className="bg-ink text-cream px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%] text-sm">{text}</div>
        <div className="h-7 w-7 rounded-full bg-cream flex items-center justify-center"><User className="h-3.5 w-3.5" /></div>
      </div>
    );
  }
  if (role === "agent") {
    return (
      <div className="flex items-end gap-2">
        <div className="h-7 w-7 rounded-full bg-info flex items-center justify-center"><Headphones className="h-3.5 w-3.5 text-cream" /></div>
        <div className="bg-info/10 border border-info/30 px-3 py-2 rounded-2xl rounded-bl-sm max-w-[80%] text-sm">
          <div className="text-[10px] font-mono uppercase tracking-wider text-info mb-0.5">{name}</div>
          {text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2">
      <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
      <div className="bg-card border border-ink/10 px-3 py-2 rounded-2xl rounded-bl-sm max-w-[80%] text-sm">
        <div className="text-[10px] font-mono uppercase tracking-wider text-lime mb-0.5">{name}</div>
        {text}
      </div>
    </div>
  );
};

export default Tickets;
