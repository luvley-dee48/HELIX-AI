import { Bot } from "lucide-react";

export const SiteFooter = () => (
  <footer className="border-t border-ink/10 bg-ink text-cream">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-lime flex items-center justify-center">
            <Bot className="h-4 w-4 text-ink" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl font-semibold">Helix.</span>
        </div>
        <p className="text-cream/60 max-w-sm">Two AI agents. One platform. Auto-resolve support tickets and qualify your inbound leads on autopilot.</p>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Products</h4>
        <ul className="space-y-2 text-sm">
          <li>Helpdesk AI</li>
          <li>Lead Qualifier</li>
          <li>Live Chat Widget</li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li>About</li>
          <li>Pricing</li>
          <li>Customers</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-cream/10">
      <div className="container py-6 flex justify-between text-xs text-cream/50 font-mono">
        <span>© 2026 HELIX LABS</span>
        <span>BUILT FOR MODERN SAAS</span>
      </div>
    </div>
  </footer>
);
