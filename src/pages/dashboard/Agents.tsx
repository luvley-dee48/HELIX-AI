import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const agents = [
  { name: "Helix AI", role: "Auto-resolve · 24/7", online: true, ai: true, handled: 1284, initial: "AI" },
  { name: "Maya Chen", role: "Senior Support", online: true, ai: false, handled: 142, initial: "MC" },
  { name: "James Okafor", role: "Support Lead", online: true, ai: false, handled: 98, initial: "JO" },
  { name: "Sara Bennett", role: "Support Agent", online: false, ai: false, handled: 76, initial: "SB" },
];

const Agents = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-display text-2xl">Your team</h2>
        <p className="text-sm text-muted-foreground">3 of 3 seats used · Pro plan</p>
      </div>
      <Button variant="ink"><Plus className="h-4 w-4" /> Invite agent</Button>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {agents.map((a) => (
        <div key={a.name} className={`rounded-2xl p-6 border flex items-center gap-4 ${a.ai ? "bg-ink text-cream border-ink shadow-elegant" : "bg-card border-ink/10 shadow-soft"}`}>
          <div className={`h-14 w-14 rounded-xl flex items-center justify-center font-display text-xl font-semibold flex-shrink-0 ${a.ai ? "bg-lime text-ink" : "bg-secondary text-ink"}`}>
            {a.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium">{a.name}</span>
              {a.ai && <Badge className="bg-lime text-ink hover:bg-lime font-mono text-[10px] uppercase tracking-wider">AI</Badge>}
            </div>
            <div className={`text-sm ${a.ai ? "text-cream/60" : "text-muted-foreground"}`}>{a.role}</div>
            <div className="flex items-center gap-3 mt-2 text-xs font-mono">
              <span className={`flex items-center gap-1.5 ${a.online ? (a.ai ? "text-lime" : "text-success") : "text-muted-foreground"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${a.online ? (a.ai ? "bg-lime" : "bg-success") : "bg-muted-foreground"}`} />
                {a.online ? "ONLINE" : "OFFLINE"}
              </span>
              <span className={a.ai ? "text-cream/50" : "text-muted-foreground"}>· {a.handled} handled</span>
            </div>
          </div>
          {!a.ai && <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>}
        </div>
      ))}
    </div>
  </div>
);

export default Agents;
