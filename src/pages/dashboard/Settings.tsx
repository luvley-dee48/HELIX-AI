import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const [copied, setCopied] = useState(false);
  const apiKey = "hlx_live_sk_4f8a9b2c1d6e7f3a5b9c0d8e2f1a";
  const copy = () => { navigator.clipboard.writeText(apiKey); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Billing */}
      <Section title="Billing" desc="Manage your subscription and payment details.">
        <div className="rounded-xl border border-ink/10 bg-secondary/30 p-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl">Pro plan</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-lime text-ink px-2 py-0.5 rounded-full">ACTIVE</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">$199/month · renews May 28, 2026</div>
          </div>
          <Button variant="outline">Manage in Stripe <ExternalLink className="h-3.5 w-3.5" /></Button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Usage label="Tickets" used={1284} total={500} unit="/mo" over />
          <Usage label="Leads" used={2142} total={2500} unit="/mo" />
          <Usage label="Agent seats" used={3} total={3} unit="" />
        </div>
      </Section>

      {/* API Keys */}
      <Section title="API keys" desc="Use these keys to authenticate API requests from your servers.">
        <Label>Production key</Label>
        <div className="flex gap-2 mt-1.5">
          <Input value={apiKey} readOnly className="font-mono text-sm bg-secondary/30 border-ink/10" />
          <Button variant="ink" onClick={copy}>{copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}</Button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button variant="outline" size="sm">Rotate key</Button>
          <Button variant="ghost" size="sm">View docs</Button>
        </div>
      </Section>

      {/* Org */}
      <Section title="Organization" desc="Update your organization details.">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Business name</Label>
            <Input defaultValue="Acme Inc." className="mt-1.5 bg-card border-ink/10" />
          </div>
          <div>
            <Label>Support email</Label>
            <Input defaultValue="support@acme.com" className="mt-1.5 bg-card border-ink/10" />
          </div>
        </div>
        <Button variant="ink" className="mt-4">Save changes</Button>
      </Section>
    </div>
  );
};

const Section = ({ title, desc, children }: any) => (
  <div className="bg-card rounded-2xl border border-ink/10 p-6 shadow-soft">
    <h3 className="font-display text-xl">{title}</h3>
    <p className="text-sm text-muted-foreground mb-5">{desc}</p>
    {children}
  </div>
);

const Usage = ({ label, used, total, unit, over }: any) => {
  const pct = Math.min(100, (used / total) * 100);
  return (
    <div className="rounded-xl border border-ink/10 p-4">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display text-2xl mt-1">{used.toLocaleString()}<span className="text-sm text-muted-foreground"> / {total}{unit}</span></div>
      <div className="h-1.5 bg-secondary rounded-full mt-3 overflow-hidden">
        <div className={`h-full ${over ? "bg-destructive" : "bg-lime"}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default Settings;
