import { Calendar, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const leads = [
  { name: "Jordan Klein", company: "Acme Co", title: "Head of Growth", score: 92, status: "Meeting booked", icp: "Strong" },
  { name: "Lia Park", company: "Northwind", title: "VP Sales", score: 88, status: "Replied", icp: "Strong" },
  { name: "Marcus Webb", company: "Quantum Labs", title: "Founder", score: 81, status: "Outreach sent", icp: "Strong" },
  { name: "Priya Shah", company: "Helio", title: "CMO", score: 76, status: "Outreach sent", icp: "Medium" },
  { name: "Tom Liu", company: "Loop", title: "Director Ops", score: 71, status: "Enriching", icp: "Medium" },
  { name: "Anna Reyes", company: "Bridge", title: "Manager", score: 58, status: "Researching", icp: "Medium" },
  { name: "Kenji Sato", company: "Polar", title: "Analyst", score: 42, status: "Disqualified", icp: "Weak" },
];

const Leads = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-card border border-ink/10 rounded-2xl p-6 shadow-soft">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Pipeline value</div>
        <div className="font-display text-3xl">$1.2M</div>
      </div>
      <div className="bg-card border border-ink/10 rounded-2xl p-6 shadow-soft">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Meetings booked</div>
        <div className="font-display text-3xl">47</div>
      </div>
      <div className="bg-lime rounded-2xl p-6">
        <div className="text-xs font-mono uppercase tracking-widest text-ink/70 mb-3">Conversion lift</div>
        <div className="font-display text-3xl">+50%</div>
      </div>
    </div>

    <div className="bg-card rounded-2xl border border-ink/10 shadow-soft overflow-hidden">
      <div className="p-5 border-b border-ink/10 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl">Inbound leads</h3>
          <p className="text-sm text-muted-foreground">Helix is qualifying & reaching out automatically</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime">
          <Sparkles className="h-3.5 w-3.5" /> AI active
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-ink/10 bg-secondary/50">
            {["Lead", "Company", "Score", "ICP fit", "Status", ""].map((h) => (
              <th key={h} className="text-left px-6 py-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.name} className="border-b border-ink/5 hover:bg-secondary/30">
              <td className="px-6 py-4">
                <div className="font-medium text-sm">{l.name}</div>
                <div className="text-xs text-muted-foreground">{l.title}</div>
              </td>
              <td className="px-6 py-4 text-sm">{l.company}</td>
              <td className="px-6 py-4">
                <ScoreBar score={l.score} />
              </td>
              <td className="px-6 py-4">
                <Badge variant="outline" className={`font-mono text-[10px] uppercase ${l.icp === "Strong" ? "border-lime bg-lime/20 text-ink" : l.icp === "Medium" ? "border-warning/40 text-warning" : "text-muted-foreground"}`}>{l.icp}</Badge>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{l.status}</td>
              <td className="px-6 py-4">
                <div className="flex gap-1.5">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Mail className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Calendar className="h-3.5 w-3.5" /></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ScoreBar = ({ score }: { score: number }) => {
  const color = score >= 80 ? "bg-lime" : score >= 60 ? "bg-warning" : "bg-muted-foreground";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 rounded-full bg-secondary overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="font-mono text-xs">{score}</span>
    </div>
  );
};

export default Leads;
