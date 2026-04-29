import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatWidget } from "@/components/ChatWidget";

const WidgetDemo = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Mock website */}
      <div className="border-b border-ink/10 bg-card">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button asChild variant="ghost" size="sm"><Link to="/"><ArrowLeft className="h-4 w-4" /> Back</Link></Button>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">demo · example customer site</span>
          </div>
          <span className="font-display text-lg">Northwind Co.</span>
        </div>
      </div>

      <section className="container py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4">Welcome to Northwind</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          This is a mock customer website. The Helix chat widget is embedded in the corner — try it out.
        </p>
        <div className="bg-ink text-cream rounded-2xl p-6 max-w-md mx-auto text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-lime mb-3">Embed code</div>
          <pre className="font-mono text-xs text-cream/90 whitespace-pre-wrap">{`<script src="https://cdn.helix.ai/widget.js"
  data-org="northwind"
  defer></script>`}</pre>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default WidgetDemo;
